import {pipe} from './utility.js'

const Alg = {
    Basic: () => ({
        percipatation: '',
        clouds: '',
        wind: '',
        lightning: '',
        geo: '',
        time: ''

    }),
    Percip: (part, weather) => ({
        percipatation: part,
        weather
    }),
    Cloud: (part, weather) => ({
        clouds: part,
        weather
    }),
    Wind: (part, weather) => ({
        wind: part,
        weather
    }),
    Lightning: (part, weather) => ({
        lightning: part,
        weather
    }),
    Geolocation: (weather1, weather2) => ({
        
    }),
    TimeRange: (weather1, weather2) => ({

    })
};

const API = {
    //GenerateStorm: (Alg.Percip('downpour', Alg.Cloud('overcast', Alg.Wind('high winds', Alg.Basic)))),
    GenerateStorm: () => pipe(Alg.Percip('downpour', Alg.Basic), Alg.Cloud('overcast', Alg.Basic), Alg.Wind('high winds', Alg.Basic), Alg.Lightning('constant', Alg.Basic)),
    MakeWind: (wind) => Alg.Wind(wind, Alg.Basic),
    MakeClouds: (cloud) => Alg.Cloud(cloud, Alg.Basic),
    MakePercipitation: (percip) => Alg.Percip(percip, Alg.Basic),
    MakeLightning: (light) => Alg.Lightning(light, Alg.Basic),
    GenerateSnow: () => pipe(Alg.Cloud('overcast', Alg.Basic), Alg.Percip('snowing',Alg.Basic)),
    GenerateRain: () => pipe(Alg.Cloud('overcast', Alg.Basic) , Alg.Percip('rain', Alg.Basic))
    
};

export{
    API as weather
}