import {pipe} from './utility.js'
import {weather} from './index.js'

const area = document.querySelector('#app');

//debugger;
console.log(weather.GenerateCustomWeather('overcast','raining downpour', 'high winds', 'constant'))
// console.log(weather.GenerateRain)
// console.log(weather.GenerateSnow)
// console.log(weather.GenerateTornade)
// console.log(weather.MakePercipitation('rain'))