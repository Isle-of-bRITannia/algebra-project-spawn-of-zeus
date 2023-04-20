import {pipe} from './utility.js'
import {weather} from './index.js'

const area = document.querySelector('#app');


console.log(weather.CreateCustomWeather('overcast','raining downpour', 'high winds', 'constant'))
console.log(weather.GenerateSnow())
console.log(weather.CreateSnowStorm())
//debugger;
console.log(weather.CreateTornado())
