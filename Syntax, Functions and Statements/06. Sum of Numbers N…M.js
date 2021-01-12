function sumOfNumbers(a, b){

    a = Number(a);
    b = Number(b);
    let result = 0 
    
    for (let i = a; i <= b; i++) {
        result += i 
        
    }
    
    return result

}

console.log(sumOfNumbers('1', '5'));