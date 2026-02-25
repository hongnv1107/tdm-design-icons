const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const keepFiles = ['.fatherrc.js', 'jest.config.js', '.eslintrc.js'];

const files = fs.readdirSync(rootDir);
files.forEach((file) => {
  const fullPath = path.join(rootDir, file);
  if (!fs.statSync(fullPath).isFile()) return;
  if (keepFiles.includes(file)) return;
  if (file.endsWith('.d.ts') || file.endsWith('.js')) {
    fs.unlinkSync(fullPath);
  }
});

const esIconsDir = path.join(rootDir, 'es', 'icons');
if (fs.existsSync(esIconsDir)) {
  fs.readdirSync(esIconsDir)
    .filter((f) => f.endsWith('.d.ts'))
    .forEach((f) => fs.unlinkSync(path.join(esIconsDir, f)));
}
