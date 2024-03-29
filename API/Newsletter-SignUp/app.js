const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/signup.html');
  
  // res.sendFile(__dirname + '/sign-in.css')
})

app.post('/', (req, res) => {
  let firstName = req.body.fName;
  let lastName = req.body.lName;
  let email = req.body.email;
  console.log(firstName, lastName, email);  
})

app.listen(5000, () => {
  console.log("Server is running on port 5000.")
})
