import {pipe, pipeRoutes} from './utility.js'

const Alg = {
    Basic: () => ({
       part: '',
       weather: '',
       weather1: []
    }),
    Section: (part, weather) => ({
        part: part,
        weather: weather,
        weather1: []
    }),
    pipeWeather: (partA, partB) => ({
          part: partA.part,
          weather1: [...partA.weather1, partA.weather, ...partB.weather1],
          weather: partB.weather,
    }),
    // Percip: (part, weather) => ({
    //     percipatation: part,
    //     weather
    // }),
    // Cloud: (part, weather) => ({
    //     clouds: part,
    //     weather
    // }),
    // Wind: (part, weather) => ({
    //     wind: part,
    //     weather
    // }),
    // Lightning: (part, weather) => ({
    //     lightning: part,
    //     weather
    // }),
    Geolocation: (weather1, weather2) => ({
        
    }),
    TimeRange: (weather1, weather2) => ({

    })
};

export{
    Alg
}