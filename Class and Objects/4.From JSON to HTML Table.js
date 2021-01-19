function solve(input){
    let escapedInput = str => str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

    input = input.split(/\s/).join('');
    
    let ident = '   ';
    let table = `<table>\n${ident}<tr>`;
    let students = JSON.parse(input);
    let first = students[0];

    for (const key in first) {
        let line = Number.isFinite(key)
            ? key
            : escapedInput(key);

        table += `<th>${line}</th>`;
    }
    
    // let students = JSON.parse(input);
    // let first = students[0];
    // let html = "<table>";

    // html +=`\n   <tr>${Object.keys(first).map(x=>`<th>${escapedInput(x)}</th>`).join('')}</tr>\n`;

    for (let i = 0; i < students.length; i++) {
        table += `</tr>\n${ident}<tr>`;

        for (const key in first) {
            let line = Number.isFinite(students[i][key])
                ? students[i][key]
                : escapedInput(students[i][key]);

            table += `<td>${line}</td>`;
        }
    }

    table += '</tr>\n</table>';
    return table;

    // students.forEach(student =>{
    //     let objValue = Object.values(student).map(x=>`<td>${x}</td>`).join('')
    //     html +=`   <tr>${objValue}</tr>\n`
    // });
    
    // html +='</table>\n'
    // console.log(html);
}

console.log(solve('[{"Name":"Pesho","Score":4," Grade":8},{"Name":"Gosho","Score":5," Grade":8},{"Name":"Angel","Score":5.50," Grade":10}]'))
console.log(solve('[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]'
))

// function fromJSONToHTMLTable(params) {
//     let escapedInput = str => str
//         .replace(/&/g, '&amp;')
//         .replace(/</g, '&lt;')
//         .replace(/>/g, '&gt;')
//         .replace(/"/g, '&quot;')
//         .replace(/'/g, '&#39;');

//     let ident = '   ';
//     let table = `<table>\n${ident}<tr>`;
//     let parsedObjects = JSON.parse(params);

//     // Set Headers
//     for (const key in parsedObjects[0]) {
//         let thContent = Number.isFinite(key)
//             ? key
//             : escapedInput(key);

//         table += `<th>${thContent}</th>`;
//     }

//     // Set Table Data
//     for (let i = 0; i < parsedObjects.length; i++) {
//         table += `</tr>\n${ident}<tr>`;

//         for (const key in parsedObjects[0]) {
//             let tdContent = Number.isFinite(parsedObjects[i][key])
//                 ? parsedObjects[i][key]
//                 : escapedInput(parsedObjects[i][key]);

//             table += `<td>${tdContent}</td>`;
//         }
//     }

//     table += '</tr>\n</table>';
//     return table;
// }