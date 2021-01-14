function evenPosElement(arr){
    resultArr = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0){
            resultArr.push(arr[i])

        }
        
    }
    console.log(resultArr.join(' '));
}

evenPosElement(['20', '30', '40', '50', '60'])