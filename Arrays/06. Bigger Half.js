function biggerHalf(arr){

    arr.sort((a,b) => a-b)

    b = arr.slice(arr.length/2)
    console.log(b);
    arr.length % 2 == 0 ? result = arr.slice(arr.length/2): result = arr.slice((arr.length/2)-1)
    console.log(result);
}
biggerHalf([3, 19, 14, 7])