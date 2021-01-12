function solve(steps, foot, speedKm){

    let speed = speedKm * 1000 / 3600;
    let distance = steps * foot;
    
    
    let rest = Math.floor(distance/500)*60;
    let time = distance/speed + rest;

    let hours = Math.floor(time/60/60).toFixed(0).padStart(2, "0");
    let minutes = Math.floor(time/60).toFixed(0).padStart(2, "0");
    let seconds = (time%60).toFixed(0).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`

}


console.log(solve(4000, 0.60, 5));