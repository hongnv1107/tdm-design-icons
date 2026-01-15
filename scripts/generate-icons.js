const fs = require('fs');
const path = require('path');

// Root directory is parent of scripts folder
const rootDir = path.join(__dirname, '..');
const svgDir = path.join(rootDir, 'svg');
const iconsDir = path.join(rootDir, 'src', 'icons');

// Ensure icons directory exists
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Helper: Convert filename to variable names
function getNames(filename) {
  // Remove .svg extension
  const baseName = filename.replace('.svg', '');
  
  // camelCase for variable name (first letter lowercase)
  const varName = baseName.charAt(0).toLowerCase() + baseName.slice(1);
  
  // kebab-case for icon definition name (remove Icon suffix, then convert)
  const kebabName = baseName
    .replace(/Icon$/, '')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
  
  return {
    componentName: baseName,           // AddressBookFilledIcon
    svgVarName: varName.replace(/Icon$/, 'Svg'),  // addressBookFilledSvg
    defVarName: varName.replace(/Icon$/, 'IconDefinition'), // addressBookFilledIconDefinition
    kebabName: kebabName,              // address-book-filled
  };
}

// Helper: Minify SVG string
function minifySvg(svgContent) {
  return svgContent
    .replace(/\.\s*$/, '')           // Remove trailing dots
    .replace(/<!--[\s\S]*?-->/g, '') // Remove comments
    .replace(/\s+/g, ' ')            // Collapse whitespace
    .replace(/>\s+</g, '><')         // Remove whitespace between tags
    .replace(/\s*\/>/g, '/>')        // Clean self-closing tags
    .replace(/\s+>/g, '>')           // Remove space before >
    .replace(/<\s+/g, '<')           // Remove space after <
    .trim();
}

// Helper: Generate base64 data URI from SVG
function svgToBase64DataUri(svgContent) {
  const minified = minifySvg(svgContent);
  const base64 = Buffer.from(minified).toString('base64');
  return `data:image/svg+xml;base64,${base64}`;
}

// Helper: Convert SVG string to JSX format
function svgToJsx(svgContent) {
  // Remove leading/trailing whitespace and dots
  svgContent = svgContent.trim().replace(/\.\s*$/, '');
  
  // Parse SVG attributes from <svg> tag
  const svgMatch = svgContent.match(/<svg([^>]*)>([\s\S]*)<\/svg>/i);
  if (!svgMatch) return null;
  
  const attrsStr = svgMatch[1];
  const innerContent = svgMatch[2].trim();
  
  // Extract attributes
  const attrs = {};
  const attrRegex = /(\w+(?:-\w+)*)="([^"]*)"/g;
  let match;
  while ((match = attrRegex.exec(attrsStr)) !== null) {
    attrs[match[1]] = match[2];
  }
  
  // Format inner paths with proper indentation
  const formattedInner = innerContent
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(line => `    ${line}`)
    .join('\n');
  
  // Build JSX SVG
  const jsx = `  <svg
    width="${attrs.width || '24'}"
    height="${attrs.height || '24'}"
    viewBox="${attrs.viewBox || '0 0 24 24'}"
    fill="${attrs.fill || '#cacaca'}"
    xmlns="${attrs.xmlns || 'http://www.w3.org/2000/svg'}"
  >
${formattedInner}
  </svg>`;
  
  return jsx;
}

// Helper: Generate TSX content
function generateTsx(componentName, svgJsx, names, base64DataUri) {
  return `// GENERATE BY ./scripts/generate-icons.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const ${names.svgVarName} = (
${svgJsx}
);

const ${names.defVarName} = svgToIconDefinition(
  ${names.svgVarName},
  '${names.kebabName}'
);

/**![${componentName}](${base64DataUri}) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={${names.defVarName}} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = '${componentName}';
}

export default RefIcon;
`;
}

// Collect all SVG files recursively
function collectSvgFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      collectSvgFiles(fullPath, files);
    } else if (item.endsWith('.svg')) {
      files.push(fullPath);
    }
  });
  return files;
}

// Parse command line arguments
const args = process.argv.slice(2);
const forceRegenerate = args.includes('--force') || args.includes('-f');

if (forceRegenerate) {
  console.log('Force mode enabled: will overwrite existing files in icons/\n');
}

// Main execution
const svgFiles = collectSvgFiles(svgDir);
let generated = 0;
let overwritten = 0;
let skipped = 0;
let errors = 0;

svgFiles.forEach(svgPath => {
  const filename = path.basename(svgPath);
  const names = getNames(filename);
  const tsxFilename = names.componentName + '.tsx';
  
  // Check if TSX already exists in icons folder
  const iconsTsxPath = path.join(iconsDir, tsxFilename);
  const existsInIcons = fs.existsSync(iconsTsxPath);
  
  if (existsInIcons && !forceRegenerate) {
    console.log(`[SKIP] ${tsxFilename} already exists in icons/`);
    skipped++;
    return;
  }
  
  // Read SVG content
  const svgContent = fs.readFileSync(svgPath, 'utf-8');
  
  // Convert to JSX
  const svgJsx = svgToJsx(svgContent);
  if (!svgJsx) {
    console.log(`[ERROR] Failed to parse ${filename}`);
    errors++;
    return;
  }
  
  // Generate base64 data URI for comment
  const base64DataUri = svgToBase64DataUri(svgContent);
  
  // Generate TSX content
  const tsxContent = generateTsx(names.componentName, svgJsx, names, base64DataUri);
  
  // Write TSX file to icons/
  fs.writeFileSync(iconsTsxPath, tsxContent, 'utf-8');
  
  if (existsInIcons) {
    console.log(`[OVERWRITE] ${tsxFilename}`);
    overwritten++;
  } else {
    console.log(`[OK] ${tsxFilename}`);
    generated++;
  }
});

// Helper: Generate index.ts file for icons
function generateIndexFile() {
  const files = fs.readdirSync(iconsDir)
    .filter(file => file.endsWith('.tsx'))
    .sort();
    
  const content = [
    '// Auto-generated barrel export for icons',
    '// This file enables tree-shaking - only imported icons will be bundled',
    '',
    ...files.map(file => {
      const componentName = file.replace('.tsx', '');
      return `export { default as ${componentName} } from './${componentName}';`;
    }),
    ''
  ].join('\n');
  
  const indexPath = path.join(iconsDir, 'index.ts');
  fs.writeFileSync(indexPath, content, 'utf-8');
  console.log(`\n[OK] Generated icons/index.ts with ${files.length} exports`);
}

console.log(`\n=== Done ===`);
console.log(`Generated: ${generated}`);
if (forceRegenerate) {
  console.log(`Overwritten: ${overwritten}`);
}
console.log(`Skipped: ${skipped}`);
console.log(`Errors: ${errors}`);
console.log(`Total SVG files: ${svgFiles.length}`);

// Generate index file
generateIndexFile();



