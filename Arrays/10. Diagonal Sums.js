function sumDiag(arr){
    let sumPrime = arr[0][0];
    let sumSecond = arr[0][arr[0].length-1]
    for (let i = 1; i < arr.length; i++) {
        sumPrime += arr[i][i]  
    }
    for (let j = arr.length-1; j > 0; j--) {
        sumSecond += arr[arr.length - j][j-1]  
    }

    console.log(`${sumPrime} ${sumSecond}`)
}

console.log(sumDiag([[20, 40],
    [10, 60]]     
   ));