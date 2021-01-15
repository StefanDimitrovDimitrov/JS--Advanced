function solve(arr){
    let max = Number.MIN_SAFE_INTEGER
    
    arr = arr.filter(num => {
        if(num >= max) {
            max = num;
            return true;
        }else{
            return false;
        }
    })

    return arr

    // let output = arr.reduce((acc, curr) => {
    //     if(curr > max){
    //         max = curr;
    //         acc.push(max);
    //     }
    //     return acc;
    // }, []);

    // console.log(output)
}

solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    );