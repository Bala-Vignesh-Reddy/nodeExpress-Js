const express = require('express');
const https = require('https');

const app = express()

app.get('/', function(req, res){

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Kalol&appid=e58d68d3ca1a9f8e2a64f9454ab40685&units=metric#"
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on('data', function(data){
            //if we log data then we will get in hexadecimal format
            //these can be done to get in json format
            const weatherData = JSON.parse(data)
            console.log(weatherData);

            //for converting the object into string we can used JSON.stringify()
            // const obj = {
            //     name: "Bala",
            //     hobby: "coding"
            // }
            // console.log(JSON.stringify(obj));
        })
    })

    res.send("Server is up and running");
})




app.listen(3000, function(){
    console.log("Server is runnign on port 3000.")
})