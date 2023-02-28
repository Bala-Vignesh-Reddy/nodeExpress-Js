//Fs file Sync

// const fs = require('fs')
// fs.readFileSync
//same
const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./contents/first.txt', 'utf8')
const second = readFileSync('./contents/second.txt', 'utf8')

//return the text present in the file
console.log(first);
console.log(second);

writeFileSync('./contents/result-sync.txt', `Here is the result : \n ${first}, \n ${second}`, {flag : 'a'} )
// Here flag : 'a' is used to append it if we don't write it then it will rewrite the file
