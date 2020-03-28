const chalk = require('chalk');
const path = require('path');

let log = (name, el) => console.log(chalk.blue(name), chalk.green(el));

log('File name', path.basename(__filename));
log('Dir name', path.dirname(__filename));
log('File extention', path.extname(__filename));
log('Parse: ', path.parse(__filename));
console.log('Parse: ', path.parse(__filename).name);

console.log(path.join(__dirname, 'server', 'index.html'));