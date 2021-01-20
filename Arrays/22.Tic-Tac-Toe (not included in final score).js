function matrix(arr){
    
    let rowSums = arr.map((el)=> el.reduce((a,b)=>a+b),0);
    let colSums = arr.reduce((a, b)=> a.map((x, i)=> x + b[i]))


console.log(`${rowSums}______${colSums}`);
}

console.log(matrix(
    [
    [100, 100, 100],
    [50, 50, 50],
    [1, 2, 3]
]
   ))