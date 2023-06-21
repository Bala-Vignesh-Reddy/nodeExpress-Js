const express = require('express');
const path = require('path')
const app = express();

app.use(express.static(__dirname +   '/public'));

app.get('/', (req, res) => {
//  res.sendFile('index.html') // this can be used when locally
  res.sendFile(path.join(__dirname + "/index.html"))  
})
//calculation of BMI
app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post('/bmicalculator', function (req, res){
  var weight = parseFloat(req.body.weight)
  console.log(weight)
  var height = parseFloat(req.body.height)

  var bmi = weight/(height * height)

  res.send("Your BMI is: " + bmi);
})



app.listen(3000, function(){
  console.log("Server is running on port 3000");
})
