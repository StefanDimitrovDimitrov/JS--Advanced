function pie(arr, flower1,flower2){
    startIndex = arr.indexOf(flower1)
    endIndex = arr.indexOf(flower2)+1

    result = arr.slice(startIndex,endIndex)

    return result
}

console.log(pie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));