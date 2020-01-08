const request = require('request');
const address = process.argv[2]
console.log(process.argv)
if(!address){
  console.log('please provide the valid address')
}else{
//const geocode = ('./util/geocde');
//const forecast = ('./util/forecast')
//const url = 'https://api.darksky.net/forecast/0ea61371940d3ee50acc9dfea00b0d30/37.8267 ';
//request({ url: url, json: true },(error, response) =>{
  //  if(error){
    //    console.log('unable to fetch data');
    //}
    //else if(response.body.error)
    //{
      //  console.log('unable to find the location');
    //}
    //else{
//console.log(response)
//const data = JSON.parse(response.body)
//console.log(data.currently)
//console.log('It is the temperature '+response.body.currently.temperature + 'and the percentage of rain is ' +response.body.currently.precipProbability);
//}}
//)
//const geocode = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmFkaGFndXB0YSIsImEiOiJjazRrOHJ1MTcxNDB3M2tudGpiOXdkM2JpIn0.F_3b6hPn5wjqXyn6iq-rjw'
//request({ url: geocode, json: true}, (error, response) =>{
  //  if(error){
    //        console.log('unable to fetch data');
      //  }
        //else if(response.body.features.length===0)
        //{
          //  console.log('unable to find the location,try another search');
       // }
        //else{
    //const latitude = response.body.features[0].center[0];
    //const longitude = response.body.features[0].center[1];
    //console.log(latitude+','+ longitude)
//}})
const geocode = (address, callback) =>{
const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoicmFkaGFndXB0YSIsImEiOiJjazRrOHJ1MTcxNDB3M2tudGpiOXdkM2JpIn0.F_3b6hPn5wjqXyn6iq-rjw'
request({ url: url, json: true}, (error, response) =>{
if(error){
callback('unable to connect to local service', undefined)
}else if(response.body.features.length===0)
{
  callback('unable to find location Try another',undefined  )
}else{
  callback(undefined,{
    latitude:response.body.features[0].center[1],
    longitude:response.body.features[0].center[0],
    location:response.body.features[0].place_name

  })
}})
}
geocode(address, (error,data)=>{
console.log('Error',error)
console.log('Data',data)

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
    callback(undefined,response.body.daily.data[0].summary+'It is currently'+response.body.currently.temperature + 'and the percentage of rain is ' +response.body.currently.precipProbability)
    }}
    )
  
  }
  
forecast(data.latitude , data.longitude, (error,data) =>{
  console.log('Error',error);
  console.log('Data',data)
  
}
)
})
}
