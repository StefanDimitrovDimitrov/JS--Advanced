function biggestElement(arr){
    let bigestNum = -999999999;
    for (const list of arr) {
        for (const num of list ) {
            if (num > bigestNum){
                bigestNum = num;
            }
        }
    }
    return bigestNum
}

console.log(biggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]))