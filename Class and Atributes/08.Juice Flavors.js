function solve(arr){
    let juice = {}
    let listJuice = []
    let botles = {}
    arr.forEach(x => {
        [juiceName, juiceQuantity] = x.split(' => ')
        juiceQuantity = Number(juiceQuantity)
        if(!listJuice.includes(juiceName)){
            listJuice.push(juiceName)
            juice[juiceName] = juiceQuantity

        }else{
            juice[juiceName] += juiceQuantity
            
        }
        while (juice[juiceName] >= 1000){
            if(!(juiceName in botles)){
                botles[juiceName] = 0

            }
            botles[juiceName] ++
            juice[juiceName] -= 1000
        }

    });
    Object.entries(botles).forEach(([key,value]) => {
        console.log(`${key} => ${value}`)
    })
}




solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)
