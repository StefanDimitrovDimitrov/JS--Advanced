function biggerHalf(arr){

    arr.sort((a,b) => a-b)


    // arr.length % 2 == 0 ? result = arr.slice(arr.length/2): result = arr.slice((arr.length/2)-1)
    return arr.slice(arr.length/2);
}
biggerHalf([3, 19, 14, 7])