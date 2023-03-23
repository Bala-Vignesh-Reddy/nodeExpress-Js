// STREAMS
// This are used to read or write sequentially
// 4 types of stream
// Writeable for writing
// Readable for reading
// Duplex for both
// Transform to modify

const { createReadStream } = require('fs')
const stream = createReadStream('./contents/big.txt', {highWaterMark: 90000, encoding: 'utf8'});

// default size of buffer is 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./contents/big.txt', { highWaterMark: 90000})
// const stream = createReadStream('../contents/big.txt', { encoding: 'utf8'})  

stream.on('data', (result) => {
    console.log(result)
})
    
stream.on('error', (err) => {
    console.log(err);
})
