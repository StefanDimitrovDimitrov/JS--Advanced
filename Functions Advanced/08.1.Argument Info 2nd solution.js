function solve(){
    const counter = {};

    [...arguments].forEach(x => {
        let result = '';
        let type = typeof x
        type === 'function' ? result = `${type}: ${x.toString()}` : result = `${type}: ${x}`;
        console.log(result);

        if(!counter[type]){
            counter[type] = {count: 0};
        }

        counter[type].count += 1;
    });
    const sortedCounter = Object.keys(counter).sort((a,b)=> counter[b].count - counter[a].count);

    sortedCounter.forEach(x => console.log(`${x} = ${counter[x].count}`));

}

solve('cat', 42, function () { console.log('Hello world!'); })