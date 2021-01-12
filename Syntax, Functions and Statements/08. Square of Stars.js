function stars(n){
    
    if(n == undefined){
        n = 5
    }
    
    let result = ''

    for (let i = 0; i < n; i++) {
        result += `${"* ".repeat(n)}\n`   
    }

    return result
    
}


console.log(stars());