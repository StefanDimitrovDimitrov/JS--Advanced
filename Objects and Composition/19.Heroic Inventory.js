function heoicInventory(input){
    let result = [];
    
    while(input.length){
        let hero = input.shift();
        let[name, level, items] = hero.split(' / ');
        level = Number(level);
        items = items?items.split(", ") : [];
        result.push({name, level, items});
    }
    
    return JSON.stringify(result)

}