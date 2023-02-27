//no ./ required in require
const os = require('os')
// for particular one we can destruct it here only
// const {<func_name>} = require('os')


// info about current user
const user = os.userInfo()
console.log(user);


//method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(), 
    totalMemory : os.totalmem(),
    freeMemory : os.freemem(),
}
console.log(currentOs);