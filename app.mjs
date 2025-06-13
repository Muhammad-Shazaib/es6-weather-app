

window.getWeather = function () {
 let cityName = document.querySelector('#cityName').value;
let API_KEY = '93586372dc35311b4d33c5c503aa8dff'
 axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
  .then(function (response) {
    // handle success
    console.log(response.data);
    document.querySelector('#result').innerHTML = `current temperature of ${response.data.name} is ${response.data.main.temp}°C with ${response.data.weather[0].description}.`;
  })
  .catch(function (error) {
    // handle error
    console.log(error.data);
    document.querySelector('#result').innerHTML = 'Error in getting weather data';
  })

}