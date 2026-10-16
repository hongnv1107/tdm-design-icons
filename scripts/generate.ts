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

const STYLE_FOLDERS = ['filled', 'outlined'];
const ADS_FOLDER = 'ads';

// svgDir/<filled|outlined>/<Name>.svg has no style baked into the filename, so
// the style folder is appended to the component name here to keep filled/outlined
// variants unique. A trailing "Icon" in the filename (color, flag) is stripped so
// no component name ends with "Icon".
function getComponentName(svgPath: string): string {
  const filename = path.basename(svgPath);
  const baseName = filename.replace(/\.svg$/i, '').replace(/Icon$/, '');
  const relParts = path.relative(svgDir, svgPath).split(path.sep);
  // svgDir/ads/<Name>.svg keeps the plain Figma name; the ADS prefix is only
  // added to the component name (AIAgent.svg → ADSAIAgent).
  if (relParts.length === 2 && relParts[0] === ADS_FOLDER) {
    return `ADS${baseName}`;
  }
  if (relParts.length === 2 && STYLE_FOLDERS.includes(relParts[0])) {
    const style = relParts[0];
    const styleSuffix = style.charAt(0).toUpperCase() + style.slice(1);
    return `${baseName}${styleSuffix}`;
  }
  return baseName;
}

// ADS icons are drawn on a 16x16 grid. Pad them by 4 on each side so they sit on
// the same 24x24 canvas as the other sets and render at a matching visual size.
const ADS_VIEW_BOX = '-4 -4 24 24';

function isAdsSvg(svgPath: string): boolean {
  const relParts = path.relative(svgDir, svgPath).split(path.sep);
  return relParts.length === 2 && relParts[0] === ADS_FOLDER;
}

function padAdsSvg(svgContent: string): string {
  return svgContent.replace(/<svg\b[^>]*>/i, tag =>
    tag
      .replace(/\swidth="[^"]*"/, ' width="24"')
      .replace(/\sheight="[^"]*"/, ' height="24"')
      .replace(/\sviewBox="[^"]*"/, ` viewBox="${ADS_VIEW_BOX}"`)
  );
}

function getNames(componentName: string): IconNames {
  const varName = componentName.charAt(0).toLowerCase() + componentName.slice(1);
  // Strip a trailing "Icon" when present (legacy BellFilledIcon style) so the two
  // generated identifiers stay distinct either way; componentName without "Icon"
  // (new BellFilled style) passes through unchanged since there's nothing to strip.
  const strippedVarName = varName.replace(/Icon$/, '');
  const baseName = componentName.replace(/Icon$/, '');
  const toKebab = (s: string) => s.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  // ADS names start with acronyms (ADSAIAgent), which the lower→upper rule can't
  // split ("adsaiagent"). Split the ADS prefix and acronym boundaries explicitly,
  // only for ADS so existing icon class names stay unchanged.
  const kebabName = /^ADS[A-Z]/.test(baseName)
    ? `ads-${toKebab(baseName.slice(3).replace(/([A-Z])([A-Z][a-z])/g, '$1-$2'))}`
    : toKebab(baseName);
  return {
    componentName,
    svgVarName: `${strippedVarName}Svg`,
    defVarName: `${strippedVarName}IconDefinition`,
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
  const seenBy = new Map<string, string>();

  for (const svgPath of svgFiles) {
    const filename = path.basename(svgPath);
    const names = getNames(getComponentName(svgPath));

    const relPath = path.relative(svgDir, svgPath);
    const previous = seenBy.get(names.componentName);
    if (previous) {
      console.error(
        `[ERROR] Component name collision "${names.componentName}": ${previous} vs ${relPath}. Skipping the latter.`
      );
      continue;
    }
    seenBy.set(names.componentName, relPath);

    const rawSvg = await readFile(svgPath, 'utf-8');
    const svgContent = isAdsSvg(svgPath) ? padAdsSvg(rawSvg) : rawSvg;
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
