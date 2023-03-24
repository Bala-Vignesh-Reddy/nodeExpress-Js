//console.log("Hello express");
//jshint esversion:6   this can be used when we get error while using const
const express = require('express') 

const app = express()

app.listen(3000, function(){
  console.log("Server Started on port 3000");
})
