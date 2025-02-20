const fs = require('fs');
const path = require('path');

const helperPluginPath = path.join(__dirname, 'node_modules/@strapi/helper-plugin/package.json');
const designSystemPath = path.join(__dirname, 'node_modules/@strapi/design-system/package.json');

console.log('Helper Plugin version:', require(helperPluginPath).version);
console.log('Design System version:', require(designSystemPath).version);