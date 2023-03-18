// STREAMS
// This are used to read or write sequentially
// 4 types of stream
// Writeable for writing
// Readable for reading
// Duplex for both
// Transform to modify

const { createReadStream } = require('fs')

const stream = createReadStream('./contents/big.txt');

stream.on('data', (result) => {
    console.log(result)
})
    