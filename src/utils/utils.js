const request = require('request')
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

// forecast(-75.7088, 44.1545, (error, data) => {
//   console.log('Error', error)
//   console.log('Data', data)
// })

const weather= (address, callback) => {
    const url= 'http://api.weatherstack.com/current?access_key=feb89ef3bc6d3bfb44e623e5b4575172&query='+address
   
    request({url, json: true}, (error, {body}={}) =>{
       if(error){
           callback('Unable to connect to weatherstack',undefined)
       }else if(body.error) {
           callback('Unable to locate location. Try another search', undefined)
       }else{
           callback(undefined,"It is currently "+body.current.temperature+" degrees out.")
       }
    })
   }

   module.exports= weather