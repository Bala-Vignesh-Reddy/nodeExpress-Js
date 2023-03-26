//console.log("Hello express");
//jshint esversion:6   this can be used when we get error while using const
const express = require('express') 

const app = express()

app.get('/', function (request, response) {
  response.send("Hello");
})

app.get('/contact', (req, res) => {
  res.send("contact me at: alphapython@gmail.com")
})

app.get('/about', (req, res) => {
  res.send('My name is AlphaPython.')
  re.send()
})

app.listen(3000, function(){
  console.log("Server Started on port 3000");
})
