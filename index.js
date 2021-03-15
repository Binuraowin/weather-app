const request = require('request');
const argv = require('yargs').argv;

let apiKey = '3d9ff51f6e47a2e75456f5d1d24762df';
let city = argv.c || 'portland';
let deg = `https://api.openweathermap.org/data/2.5/weather?lat=43.700111&lon=-79.416298&appid=${apiKey}`;

let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(deg, function (err, response, body) {
    if(err){
      console.log('error:', error);
    } else {
      let weather = JSON.parse(body)
      let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
      console.log(message);
      console.log(weather);
    }
  });