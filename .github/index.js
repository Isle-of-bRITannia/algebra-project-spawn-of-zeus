import {pipe, pipeRoutes} from './utility.js'
import {Alg} from './Algebra.js'


const API = {
    CreateWeather: (cloud, precipitation, windSpeed, lightning) => Alg.Section('clouds', cloud, Alg.Section('precipitation', precipitation, Alg.Section('windSpeed', windSpeed, Alg.Section('lightning', lightning, Alg.Basic())))),
    CreateWeatherLineup: (weather1, weather2) => Alg.TimeRange(weather1, weather2),
    CreateSnowStorm: () => Alg.pipeWeather(Alg.Section('Snow', 'Overcast'), Alg.Section('Overcast', 'High Winds'))
}
export{
    API as weather
}