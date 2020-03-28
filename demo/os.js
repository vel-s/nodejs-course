const os = require('os');
console.log('Operation system', os.platform()); // Operation system win32
console.log('Processor', os.arch()); // Processor x64
console.log('Info processor', os.cpus()); //
console.log('Free memory', os.freemem()); // Free memory 1368862720
console.log('All memory', os.totalmem()); // All memory 8497946624
console.log('Home dir ', os.homedir()); // Home dir  C:\Users\Администратор
console.log('Uptime ', os.uptime()); // Uptime  14427 (s)

