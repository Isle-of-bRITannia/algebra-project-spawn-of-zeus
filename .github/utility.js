const pipe2 = (f, g) => (...args) => g(f(...args));
const pipe = (...fs) => fs.reduce(pipe2);
const pipeRoutes = (routeA, routeB) => {
    if (routeA.weather !== routeB.part)
      throw new Error(`Routes must match up, cannot connect {to: ${routeA.weather}} with {from: ${routeB.part}}`)
  
    return {
      part: routeA.part,
      weather: routeB.weather,
      weather1: [...routeA.weather1, routeA.weather, ...routeB.weather1]
    }
  };

export {pipe, pipeRoutes};