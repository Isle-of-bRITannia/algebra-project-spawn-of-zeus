import {pipe} from './utility.js'
import {weather} from './index.js'

const area = document.querySelector('#app');


console.log(weather.CreateCustomWeather('overcast','raining downpour', 'high winds', 'constant'))
console.log(weather.GenerateSnow())
console.log(weather.CreateSnowStorm())
//debugger;
//console.log(weather.CreateTornado())
const myWeather = weather.CreateCustomWeather('overcast','rain downpour', 'high winds', 'constant');
area.innerHTML = "The weather today is " + myWeather.part + " clouds with " + myWeather.weather1[0] + " of percipitation. "
+ myWeather.weather1[1] + " blowing through the area with " + myWeather.weather + " lightning strikes."