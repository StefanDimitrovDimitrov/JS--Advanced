function carFactory(obj){

    let {model, power, color, carriage, wheelsize} = obj;

    let engine;
    if(power <= 90) {
        engine = {power: 90, volume: 1800};
    }else if(power <= 120) {
        engine = {power:120, volume: 2400};
    }else{
        engine = {power: 200, volume: 3500 };
    }
    // return engine.find(el => el.power >= power);
    let carCarriage = {type: carriage, color, color};

    let size = wheelsize % 2 === 0? --wheelsize : wheelsize;
    let wheels = [size, size, size, size];

    let result = {
        model,
        engine,
        carriage: carCarriage,
        wheels
    }
    return result
}

console.log(carFactory(
{ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));