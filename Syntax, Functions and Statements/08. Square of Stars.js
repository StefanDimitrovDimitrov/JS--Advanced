function stars(n){
    
    let result = ''

    for (let i = 0; i < n; i++) {
        result += `${"*".repeat(n)}\n`   
    }

    if(n == undefined){
        let result = ''

        for (let i = 0; i < 5; i++) {
            result += `${"* ".repeat(5)}\n`
        }
        return result
    }else{

        return result
    }
}


console.log(stars());