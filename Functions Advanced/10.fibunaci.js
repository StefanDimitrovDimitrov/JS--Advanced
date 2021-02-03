function getFibonator(){
    let previousNum = 0
    let nextNum = 0
    let result = 0
    
    return function() {
        if (nextNum < 1){
            nextNum ++
            return 1
        }else{
            result = previousNum + nextNum
            previousNum = nextNum
            nextNum = result
            return result
        }
        
    }

}

let fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());