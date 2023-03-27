const express = require('express');
const https = require('https');

const app = express()

app.get('/', function(req, res){

    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=e58d68d3ca1a9f8e2a64f9454ab40685&units=metric#"
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on('data', function(data){
            //if we log data then we will get in hexadecimal format
            //these can be done to get in json format
            const weatherData = JSON.parse(data)
            // console.log(weatherData);

            //for converting the object into string we can used JSON.stringify()
            // const obj = {
            //     name: "Bala",
            //     hobby: "coding"
            // }
            // console.log(JSON.stringify(obj));

            const temp = weatherData.main.temp; //if we have complex json then we can use the extension installed in chrome
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imgURL = "https://openweathermap.org/img/wn/"+ icon +"@2x.png"
            res.write("<p>The weather is currently " + description + "</p>")
            res.write("<h1>The temperature in London is " + temp + " degree Celcius.</h1>");
            res.write("<img src="+imgURL+">")
            res.send()
        })
    })

    // res.send("Server is up and running");
})




app.listen(3000, function(){
    console.log("Server is runnign on port 3000.")
})