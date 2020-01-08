const request = require('request');
const forecast = (latitude,longitude,callback) =>{
const url='https://api.darksky.net/forecast/0ea61371940d3ee50acc9dfea00b0d30/'+latitude+','+longitude;
request({ url: url, json: true },(error, response) =>{
      if(error){
      callback('unable to fetch data',undefined);
      }
      else if(response.body.error)
      {
        callback('unable to find the location',undefined);
      }
      else{
  callback(undefined,response.body,daily.data[0].summary+'It is currently'+response.body.currently.temperature + 'and the percentage of rain is ' +response.body.currently.precipProbability)
  }}
  )

}
module.exports = forecast