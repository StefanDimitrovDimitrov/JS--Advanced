function equal(arr){

    let numEqalPairs = 0

    for (let i = 0; i < arr.length-1; i++) {
        for (let g = 0; g < arr[i].length; g++) {
            if (arr[i][g] === arr[i+1][g]){
                numEqalPairs+=1
            }
        
        }
        
    }

    for (let k = 0; k < arr.length; k++) {
        for (let m = 1; m < arr[k].length; m++){
            if (arr[k][m] === arr[k][m-1]){
                numEqalPairs+=1
            }
        }
        
    }
        console.log(numEqalPairs);
}

    



equal([["2", "2", "5", "7", "4"],
    ["4", "0", "5", "3", "4"],
    ["2", "5", "5", "4", "2"]])
