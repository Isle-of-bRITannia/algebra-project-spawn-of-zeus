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

const API = {
    GenerateCustomWeather: (cloud, percipitation, windSpeed, lightning) => pipeRoutes(Alg.Section(cloud, percipitation), pipeRoutes(Alg.Section(percipitation, windSpeed), Alg.Section(windSpeed, lightning))),
    //GenerateStorm: (cloud, percip, wind, lightning) => (pipe(Alg.Section(cloud, percip), Alg.Section(percip, wind), Alg.Section(wind, lightning))),
    //GenerateStorm: pipe(Alg.Percip('downpour', Alg.Basic), Alg.Cloud('overcast', Alg.Basic), Alg.Wind('high winds', Alg.Basic), Alg.Lightning('constant', Alg.Basic)),
    //GenerateInsaneWeather: ()
    // GenerateSnow: () => pipeRoutes(Alg.Section('overcast', ), ),
    // GenerateRain: () => pipe(Alg.Cloud('overcast', Alg.Basic) , Alg.Percip('rain', Alg.Basic)),
    // GenerateTornade: () => pipe(Alg.Cloud('overcast', Alg.Basic), Alg.Wind('twisty', Alg.Basic))
};

export{
    API as weather
}