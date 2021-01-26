function deleteByEmail() {
    //read input field value
    //select all table cells from the last column
    //iterate over cells
    //if text matches input value -> delete row
    // -- get cell parent(row)
    // -- remove row from parentNote
    //display ... 

    const email = document.querySelector('input[name = "email"]').value;

    const rows = Array. from(document.querySelectorAll('tbody tr'));

    let deleted = false 
    for(let row of rows){
       // row.querySelectorAll("td")[1]
       if(row.children[1].textContent == email){
            row.parentNode.removeChild(row)
            deleted = true;
            document.getElementById("result").textContent = "Deleted."

        }
    
    }
    // const matches = rows.filter(r => r.children[1].textContent == email)
    // matches.forEach(r => r.remove());

    document.getElementById("result").textContent = "Not found."

}

