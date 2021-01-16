function matrix(arr){

    let resultRow = arr.map((el)=> el.reduce((a,b)=>a+b),0);
    let resultColm = arr.reduce((a, b)=> a.map((x, i)=> x + b[i]))
    return resultRow.concat(resultColm).every((el, i, arr) => el === arr[0]);

}

console.log(matrix(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   ))