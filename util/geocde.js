const request = require('request');
const geocode = (address, callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoicmFkaGFndXB0YSIsImEiOiJjazRrOHJ1MTcxNDB3M2tudGpiOXdkM2JpIn0.F_3b6hPn5wjqXyn6iq-rjw'
    request({ url: url, json: true}, (error, response) =>{
        if(error){
                   callback('unable to fetch data',undefined);
              }
                else if(response.body.features.length===0)
                {
                    callback('unable to find the location,try another search',undefined);
               }
                else{
                    callback(undefined ,{
             latitude = response.body.features[0].center[0],
             longitude = response.body.features[0].center[1]
                    })}})}
                    module.exports = geocode;