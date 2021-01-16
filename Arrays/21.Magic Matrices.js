function matrix(arr){
    
    let resultRow = []
    let resultColm = []
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        resultRow.push(arr[i].reduce((a,b) => a+b))
        for (let g = 0; g < arr.length; g++) {
            newArr.push(arr[g][i])
        }
        resultColm.push(newArr.reduce((a,b) => a+b))
        newArr = []
    }

    return resultRow.concat(resultColm).every((el, i, arr) => el === arr[0]);

}

console.log(matrix(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   ))