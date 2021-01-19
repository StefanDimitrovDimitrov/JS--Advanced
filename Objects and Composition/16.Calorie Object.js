function solve(arr){

    obj = {}

    for (const key in arr) {
        if(key%2 == 0){
            obj[arr[key]]=Number(arr[Number(key)+1])
        }
    }
    console.log(obj);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])