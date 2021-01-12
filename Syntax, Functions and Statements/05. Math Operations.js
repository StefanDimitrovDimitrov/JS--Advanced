function mathOperations(a, b, operator){

    let result = `${a} ${operator} ${b}`
    result = result.split(' ')
    result = eval(result.join(" "))

    return result

}

console.log(mathOperations(5, 6, '+'))