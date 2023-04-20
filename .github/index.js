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
    CreateCustomWeather: (cloud, percipitation, windSpeed, lightning) => pipeRoutes(Alg.Section(cloud, percipitation), pipeRoutes(Alg.Section(percipitation, windSpeed), Alg.Section(windSpeed, lightning))),
    //CreateInsaneWeather: ()
    CreateTornado: () => pipe(GenerateHighWind(), ConnectorHail()),
    GenerateSnow: () => Alg.Section('Snow', 'Overcast'),
    GenerateRain: () => Alg.Section('Rain', 'Overcast'),
    GenerateLightning: () => Alg.Section('Lighnting', 'Overcast'),
    GenerateHail: () => Alg.Section('Hail', 'Overcast'),
    GenerateHighWind: () => Alg.Section('High Winds', 'Overcast'),
    GenerateLowWind: () => Alg.Section('Low Wind', 'Overcast'),
    ConnectorSnow: () => Alg.Section('Overcast', 'Snow'),
    ConnectorRain: () => Alg.Section('Overcast', 'Rain'),
    ConnectorLightning: () => Alg.Section('Overcast', 'Lightning'), 
    ConnectorHail: () => Alg.Section('Overcast', 'Hail'), 
    ConnectorHighWind: () => Alg.Section('Overcast', 'High Winds'),
    ConnectorLowWind: () => Alg.Section('Overcast', 'Low Wind'),
    CreateSnowStorm: () => pipeRoutes(Alg.Section('Snow', 'Overcast'), Alg.Section('Overcast', 'High Winds'))
    //CreateSnowStorm: () => pipeRoutes(GenerateSnow(), ConnectorHighWind())
};

export{
    API as weather
}