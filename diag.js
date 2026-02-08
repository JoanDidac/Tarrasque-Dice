const fs = require('fs');
const path = require('path');

const log = (msg) => fs.appendFileSync('node_diag.txt', msg + '\n');

log(`CWD: ${process.cwd()}`);
try {
  log(`Contents of .: ${fs.readdirSync('.')}`);
} catch (e) {
  log(`Error listing .: ${e.message}`);
}
try {
  log(`Contents of public: ${fs.readdirSync('public')}`);
} catch (e) {
  log(`Error listing public: ${e.message}`);
}
try {
  log(`Contents of public/products: ${fs.readdirSync('public/products')}`);
} catch (e) {
  log(`Error listing public/products: ${e.message}`);
}
