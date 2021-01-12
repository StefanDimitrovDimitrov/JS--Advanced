function aggregate(arr){

    let sum = arr.reduce((a,b) => a+b)
    console.log(sum);

    let revercesum = arr.reduce((a, b) => (a + 1/b))
    console.log(revercesum);

    let string = arr.reduce((a, b) => (a + b.toString));
    console.log(string);

}

aggregate([1, 2, 3]);