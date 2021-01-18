function matrix(arr){

    let resultRow = arr.map((el)=> el.reduce((a,b)=>a+b),0);
    console.log(resultRow)
    let resultColm = arr.reduce((a, b)=> a.map((x, i)=> x + b[i]))
    console.log(resultColm);
    return resultRow.concat(resultColm).every((el, i, arr) => el === arr[0]);

}

console.log(matrix(
    [[100, 100, 100],
    [50, 50, 50],
    [1, 2, 3]]
   ))