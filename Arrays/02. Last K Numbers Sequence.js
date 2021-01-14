function fib(n, k) {
    let arr = [1];
    let sum = 0;

    for (let i = 0; i < n - 1; i++) {
        let startIndex = arr.length - k
        if (startIndex < 0) {
            startIndex = 0;
        }
        // let endIndex = arr.length+1
        let resArr = arr.slice(startIndex)
        let sum = resArr.reduce((a,b) => a+b)
        arr.push(sum);
        sum = 0;
    }

    console.log(arr);

}

fib(6, 3)