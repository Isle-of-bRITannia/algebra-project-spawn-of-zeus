import {pipe} from './utility.js'
import {weather} from './index.js'
import { Forcast } from './interpret.js';

const firstWeather = weather.CreateWeather('overcast','raining downpour', 'high winds', 'constant')
const secondWeather = weather.CreateWeather('partily', 'no rain', 'low speed winds', 'no lightning')
const lineUp = weather.CreateWeatherLineup(firstWeather, secondWeather)
//debugger;
const myWeather = Forcast({duration: 67, timeOfDay: 8})(lineUp)
console.log(myWeather);
