function generateReport(colNames) {
    let checkBoxes = document.getElementsByTagName("input")
    let data = document.getElementsByTagName("td")
    let rows = document.getElementsByTagName("tr")

    let checked = []
    let resultObject = {}
    
    let resultList = []

    for (const index in checkBoxes) {
        if (checkBoxes[index].checked){
            checked.push(Number(index))
        }
    }

    for (const check of checked) {
        let nameField = checkBoxes[check].name
        resultObject[nameField] = ''
    }
    
    // let fieldContent = data[g]

    for (let g = 1; g < rows.length; g++) {
        let row = rows[g]
        let rowsValue = rows[g].children
        let resultObject2 = {}
        for (let z = 0; z < row.cells.length; z++) {
            key = checkBoxes[z].name
            
            if (resultObject.hasOwnProperty(key)){
                resultObject2[key] = rowsValue[z].innerText
               
            }
        }
        resultList.push(resultObject2)
        console.log(resultList);   
    }

    result = JSON.stringify(resultList)

    document.getElementById("output").innerText = result
}


