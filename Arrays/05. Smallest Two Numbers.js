function smallestTwoN(arr){

    arr.sort((a, b) => a - b);
    
    arr = arr.slice(0,2)

    console.log(arr.join(" "));

}

smallestTwoN([30, 15, 50, 5])