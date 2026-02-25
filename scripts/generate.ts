import * as path from 'path';
import * as fs from 'fs';
import { promisify } from 'util';

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

const rootDir = path.join(__dirname, '..');
const svgDir = path.join(rootDir, 'svg');
const iconsDir = path.join(rootDir, 'src', 'icons');

interface IconNames {
  componentName: string;
  svgVarName: string;
  defVarName: string;
  kebabName: string;
}

function getNames(filename: string): IconNames {
  const baseName = filename.replace(/\.svg$/i, '');
  const varName = baseName.charAt(0).toLowerCase() + baseName.slice(1);
  const kebabName = baseName
    .replace(/Icon$/, '')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
  return {
    componentName: baseName,
    svgVarName: varName.replace(/Icon$/, 'Svg'),
    defVarName: varName.replace(/Icon$/, 'IconDefinition'),
    kebabName,
  };
}

function minifySvg(svgContent: string): string {
  return svgContent
    .replace(/\.\s*$/, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\s+/g, ' ')
    .replace(/>\s+</g, '><')
    .replace(/\s*\/>/g, '/>')
    .replace(/\s+>/g, '>')
    .replace(/<\s+/g, '<')
    .trim();
}

function svgToBase64DataUri(svgContent: string): string {
  const minified = minifySvg(svgContent);
  const base64 = Buffer.from(minified).toString('base64');
  return `data:image/svg+xml;base64,${base64}`;
}

function svgToJsx(svgContent: string): string | null {
  svgContent = svgContent.trim().replace(/\.\s*$/, '');
  const svgMatch = svgContent.match(/<svg([^>]*)>([\s\S]*)<\/svg>/i);
  if (!svgMatch) return null;

  const attrsStr = svgMatch[1];
  const innerContent = svgMatch[2].trim();

  const attrs: Record<string, string> = {};
  const attrRegex = /(\w+(?:-\w+)*)="([^"]*)"/g;
  let match: RegExpExecArray | null;
  while ((match = attrRegex.exec(attrsStr)) !== null) {
    attrs[match[1]] = match[2];
  }

  const formattedInner = innerContent
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(line => `    ${line}`)
    .join('\n');

  return `  <svg
    width="${attrs.width || '24'}"
    height="${attrs.height || '24'}"
    viewBox="${attrs.viewBox || '0 0 24 24'}"
    fill="${attrs.fill || '#cacaca'}"
    xmlns="${attrs.xmlns || 'http://www.w3.org/2000/svg'}"
  >
${formattedInner}
  </svg>`;
}

function generateTsx(
  componentName: string,
  svgJsx: string,
  names: IconNames,
  base64DataUri: string
): string {
  return `// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
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
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={${names.defVarName}} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = '${componentName}';
}

export default RefIcon;
`;
}

async function collectSvgFiles(dir: string, files: string[] = []): Promise<string[]> {
  const items = await readdir(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const s = await stat(fullPath);
    if (s.isDirectory()) {
      await collectSvgFiles(fullPath, files);
    } else if (item.endsWith('.svg')) {
      files.push(fullPath);
    }
  }
  return files;
}

async function generateIcons(): Promise<void> {
  try {
    await promisify(fs.access)(iconsDir);
  } catch {
    await promisify(fs.mkdir)(iconsDir, { recursive: true });
  }

  const svgFiles = await collectSvgFiles(svgDir);
  const componentNames: string[] = [];

  for (const svgPath of svgFiles) {
    const filename = path.basename(svgPath);
    const names = getNames(filename);

    const svgContent = await readFile(svgPath, 'utf-8');
    const svgJsx = svgToJsx(svgContent);
    if (!svgJsx) {
      console.error(`[ERROR] Failed to parse ${filename}`);
      continue;
    }

    const base64DataUri = svgToBase64DataUri(svgContent);
    const tsxContent = generateTsx(names.componentName, svgJsx, names, base64DataUri);
    const tsxFilename = `${names.componentName}.tsx`;
    await writeFile(path.join(iconsDir, tsxFilename), tsxContent);
    componentNames.push(names.componentName);
  }

  componentNames.sort();

  const entryText = componentNames
    .map(
      (name) => `export { default as ${name} } from './${name}';`
    )
    .join('\n');

  const indexContent = `// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

${entryText}
`;

  await writeFile(path.join(iconsDir, 'index.ts'), indexContent);
  console.log(`Generated ${componentNames.length} icons from svg/`);
}

async function generateEntries(): Promise<void> {
  let entries: string[];
  try {
    entries = (await readdir(iconsDir))
      .filter((f) => f.endsWith('.tsx'))
      .map((f) => f.replace(/\.tsx$/, ''))
      .sort();
  } catch {
    console.error('Run generate --target=icon first to create src/icons');
    return;
  }

  for (const svgIdentifier of entries) {
    const render = (id: string) => `'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const _${id} = _interopRequireDefault(require('./lib/icons/${id}'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

const _default = _${id};
exports.default = _default;
module.exports = _default;
`;

    await writeFile(
      path.resolve(__dirname, `../${svgIdentifier}.js`),
      render(svgIdentifier)
    );
    await writeFile(
      path.resolve(__dirname, `../${svgIdentifier}.d.ts`),
      `export { default } from './lib/icons/${svgIdentifier}';`
    );
  }
  console.log(`Generated ${entries.length} entry files`);
}

const target = process.argv[2];

if (target === '--target=icon') {
  generateIcons();
} else if (target === '--target=entry') {
  generateEntries();
} else {
  console.log('Usage: node generate.ts --target=icon | --target=entry');
}
