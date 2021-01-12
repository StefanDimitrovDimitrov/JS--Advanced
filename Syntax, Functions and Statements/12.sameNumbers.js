function sameNumbers(number){

    const string = number.toString();
    let isSame = false;
    let sum = 0
    for(let i = 0; i < string.length; i++) {
        
        if (string[i] == string[i+1] && string[i+1] !== undefind) {
            isSame = true
        }
        sum += Number(string[i])
    }

    return `${isSame}\n${sum}`

}

console.log(sameNumbers('2222222'));