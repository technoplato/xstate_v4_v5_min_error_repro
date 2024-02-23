// scripts/xstate5-react-script.js
const fs = require('fs-extra');
const path = require('path');

const rootNodeModules = path.join(__dirname, '..', 'node_modules');
console.log({rootNodeModules});

const source = path.join(rootNodeModules, 'xstate5');
const destination = path.join(
  rootNodeModules,
  '@xstate5',
  'react',
  'node_modules',
  'xstate',
);
const result = fs.ensureSymlinkSync(source, destination);

console.log({source, destination, result, sym: fs.ensureSymlinkSync});
