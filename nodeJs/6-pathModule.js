const path = require('path')

console.log(path.sep)

const filePath = path.join('/contents/', 'subfolder' ,'test.txt')
console.log(filePath);

//for last part only
const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'sufolder', 'test.txt')
console.log(absolute);