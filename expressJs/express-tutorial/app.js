const http = require('http')

const server = http.createServer((req, res) => {
//  console.log("Server is up and running")
  const url = req.url;
  //home page
  if(url === '/'){
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<h1>Home page</h1>')
  }
  //about page
  else if(url === '/about'){
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<h1>About Page</h1>')
    res.end()
  }
  //404 
  else{
    res.writeHead(404, {'content-type': 'text/html'})
    res.write('<h1>page not found</h1>')
    res.end()
  }
}) 

server.listen(3000)
