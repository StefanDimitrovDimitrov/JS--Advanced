function solve(arr){
    finalArr = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "add"){
            finalArr.push(1 + i)
        }else{
            finalArr.pop()
        }
        
    }

    if (finalArr.length > 0){
        return finalArr.join("\n")
    }
    return "Empty"
}

console.log(solve(['add', 
'add', 
'remove', 
'add', 
'add']
))

console.log("________");

console.log(solve(['remove', 
'remove', 
'remove']

))