function len(string1, string2, string3){

    total = string1.length + string2.length + string3.length
    average = Math.floor(total/3)

    console.log(total);
    console.log(average);
}

len('chocolate', 'ice cream', 'cake')