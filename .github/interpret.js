import { Alg } from "./Algebra.js";



const makeForecast =
  ({ duration, timeOfDay }) => (alg) => { debugger;
    return {
      basic: () => {
        return "It is a calm sunny day"
      },
      part: ({ part, amount, connector }) => {
        const recur = makeForecast({duration, timeOfDay})(connector)
        return "Today's day has " + part + " with " + amount + "in the sky." + recur;
      },
      time: ({ weather1, weather2 }) => {
        const recur = makeForecast({duration, timeOfDay})(weather1)
        const recur2 = makeForecast({duration, timeOfDay})(weather2)
        return recur + "With the following day being " + recur2

      }
    }[alg.tag](alg)
  }

export {
  makeForecast as Forcast
}