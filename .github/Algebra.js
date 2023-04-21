import {pipe, pipeRoutes} from './utility.js'

const Alg = {
    Basic: () => ({
       tag: 'basic',
       weather: '',
    }),
    Section: (part, amount, connector) => ({
        tag: 'part',
        part,
        amount,
        connector,
    }),
    TimeRange: (weather1, weather2) => ({
        tag: 'time',
        weather1,
        weather2
    })
};

export{
    Alg
}