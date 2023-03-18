const { readFile, writeFile } = require('fs')

//instead of this we can also write 
// const { readFile, writeFile } = require('fs').promises
// this will also work 

const util = require('util')
const readFilePromise  = util.promisify(readFile)
const writeFilePromise  = util.promisify(writeFile)


const start = async() => {
    try {
        const first = await readFilePromise('./contents/first.txt', 'utf8')
        const second = await readFilePromise('./contents/second.txt', 'utf8')
        await writeFilePromise('./contents/result-filePromise.txt', `This is awesome: ${first} ${second}`)
        console.log(first, second)
  } catch (error) {
      console.log(error);
  }
}

start()


      // const getText = (path) => {
      //   return new Promise((resolve, reject) => {
      //     readFile(path, 'utf8', (err, data) =>{
      //       if(err){
      //         reject(err)
      //       } else{
      //         resolve(data)
      //       }
      //     })
      //   })
      // }
      
      //getText('../contents/first.txt')
       // .then((result) => console.log(result))
        //.catch((err) => console.log(err))
