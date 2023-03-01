const {readFile, writeFile} = require('fs')

// we will make a callback
readFile('./contents/first.txt', 'utf8',  (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    //here if we directly run it then we get the output as buffer
    // console.log(result);
    //output without utf8
    //<Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 74 68 65 20 66 69 72 73 74 20 74 78 74 20 66 69 6c 65> 

    // output with utf8
    // Hello this is the first txt file

    //for writeFile or reading more file we should do it inside this callback only 
    const first = result;
    readFile('./contents/second.txt', 'utf8', (err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        //code to write in a new file
        writeFile('./contents/result-async.txt', `Here is the result for async: ${first}, ${second}`, (err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        })
        //if we do like this then this will turn into callback hell 
        //we can use promises, async and await
})

