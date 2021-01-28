function solve(arr, sortType){
    sortType === "asc" ? arr.sort((a,b)=> a-b): arr.sort((a,b)=>b-a)
    return arr
}

console.log(solve([14, 7, 17, 6, 8], 'asc'))