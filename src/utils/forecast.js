const request = require('request');
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/myToken/' + latitude + ',' + longitude + '?si=SI';
    request({url, json: true}, (err, res) => {
        if(err){
            callback('Unable to connect to weather services', undefined);
        }else if(res.body.error){
            callback('Unable to find location', undefined);
        }else{
            let data = res.body.daily.data[0].summary + ' It is currently ' + res.body.currently.temperature + ' degrees out. There is ' + res.body.currently.precipProbability + '% chance of rain';
            callback(undefined, data);
        }
    });
};
module.exports = forecast;