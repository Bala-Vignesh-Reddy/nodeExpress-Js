const http = require('http');

const server = http. createServer((req, res) =>{
    if(req.url === '/'){
        res.end('Welcome to the home page')       
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href = '/'>back home</a>`)
})

server.listen(5000)
// if we go to localhost:5000 on any browser on this machine so we can the website