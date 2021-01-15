function listOfNames(arr){
    arr.sort((a, b) => a.localeCompare(b)).forEach(x => console.log(`${arr.indexOf(x)+1}.${x}`) )
}

listOfNames(["John", "Bob", "Christina", "Ema"])