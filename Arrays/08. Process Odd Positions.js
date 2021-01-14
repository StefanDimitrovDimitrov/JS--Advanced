function processOdd(arr){
    let newArr = []
    let oddNum
    for (let i = 1; i < arr.length; i+=2) {
        oddNum = arr[i] * 2
        newArr.push(oddNum)
        
    }
    return newArr.reverse().join(' ');
}
console.log(processOdd([10, 15, 20, 25]));