function rotate(arr , num){

    while (num > 0){
        let lastElement = arr.pop()
        arr.unshift(lastElement)
        num --
    }
    
    console.log(arr.join(" "));
} 

rotate(['1', 
'2', 
'3', 
'4'], 
2
)