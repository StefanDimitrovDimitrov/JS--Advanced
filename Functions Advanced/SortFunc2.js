function sort(input, criteria){

    let sortFunction = {
        asc: function(arr) {
            return arr.sort((a,b) => a-b);
        },
        desc: function(arr){
            return arr.sort((a,b) => b-a);
        }
    }

    let func = sortFunction[criteria];
    return func(input)
}
console.log(sort([14, 7, 17, 6, 8], 'asc'))