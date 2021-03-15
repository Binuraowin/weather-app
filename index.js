const request = require('request');
const argv = require('yargs').argv;

let apiKey = '3d9ff51f6e47a2e75456f5d1d24762df';
let city = argv.c || 'portland';
let cnt = 7;
let deg = `https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&&exclude=daily&appid=${apiKey}`;

let url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=${cnt}&appid=${apiKey}`

request(deg, function (err, response, body) {
    if(err){
      console.log('error:', err);
    } else {
      let weather = JSON.parse(body)
    //   let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    //   console.log(message);
      console.log(weather);
    }
  });