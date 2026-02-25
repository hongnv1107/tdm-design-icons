const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");

const rootDir = path.resolve(__dirname, "..");
const libIndexPath = path.join(rootDir, "lib", "index.js");

if (!fs.existsSync(libIndexPath)) {
  console.error("Missing build output: lib/index.js");
  console.error("Run `npm run generate && npm run compile` before usage test.");
  process.exit(1);
}

const pkg = require("@tdm-design/icons");
const directIconModule = require("@tdm-design/icons/AddressBookFilledIcon");
const utils = require("@tdm-design/icons/utils");

const RootIcon = pkg.AddressBookFilledIcon;
const DirectIcon = directIconModule.default || directIconModule;
const DefaultIcon = pkg.default;

const isReactComponent = (value) =>
  typeof value === "function" ||
  (typeof value === "object" && value !== null && "$$typeof" in value);

assert.ok(isReactComponent(RootIcon), "Root named export should be a component");
assert.ok(isReactComponent(DirectIcon), "Direct icon import should be a component");
assert.ok(isReactComponent(DefaultIcon), "Default export should be Icon component");
assert.equal(
  typeof utils.svgToIconDefinition,
  "function",
  "Utils subpath export should expose svgToIconDefinition",
);

const rootHtml = renderToStaticMarkup(
  React.createElement(RootIcon, { className: "usage-test-icon" }),
);
const directHtml = renderToStaticMarkup(
  React.createElement(DirectIcon, { className: "usage-test-icon-direct" }),
);

assert.match(rootHtml, /usage-test-icon/, "Root import should render markup");
assert.match(directHtml, /usage-test-icon-direct/, "Direct import should render markup");

console.log("Usage test passed:");
console.log("- import { AddressBookFilledIcon } from '@tdm-design/icons'");
console.log("- import AddressBookFilledIcon from '@tdm-design/icons/AddressBookFilledIcon'");
console.log("- import { svgToIconDefinition } from '@tdm-design/icons/utils'");
