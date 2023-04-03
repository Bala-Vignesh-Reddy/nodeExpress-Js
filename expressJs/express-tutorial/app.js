const http = require('http')

const server = http.createServer((req, res) => {
//  console.log("Server is up and running")
  console.log(req.url)
  res.writeHead(200, {'content-type': 'text/html'})
  res.write('<h1>Home page</h1>')
}) 


server.listen(3000)
