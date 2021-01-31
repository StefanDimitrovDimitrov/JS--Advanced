function solve() {
    let count = 0
    let inputInfo = Array.from(document.getElementById("container").children)
 
    let [name, hall, price, buttonOnScrean] = inputInfo
    buttonOnScrean.addEventListener('click', checkInput)
 
    let ArchiveInfo = Array.from(document.getElementById("archive").children)
    let buttonArchive = ArchiveInfo[2]
    buttonArchive.addEventListener('click', clearArchive)
 
    function clearArchive(){
        let ArchiveInfo = Array.from(document.getElementById("archive").children)
        let ulArchive = ArchiveInfo[1]  
        while (ulArchive.firstChild) {
            ulArchive.removeChild(ulArchive.lastChild);
          }
    }
 
    function checkInput(e){
        count++
        e.preventDefault()      
        price2 = Number(price.value)
        if (name.value != "" && hall.value != "" && typeof price2  === 'number' && !isNaN(price2) && price2 > 0)
        {
 
            let UL = Array.from(document.getElementById("movies").children)[1]
            let li = addMovie(name.value, hall.value, price2)
            li.setAttribute("id",count)
            UL.appendChild(li)
            name.value = ''
            hall.value = ''
            price.value = ''
 
            let ArchiveBtn = Array.from(Array.from(document.getElementById(count).children)[2].children)[2]
 
            ArchiveBtn.setAttribute("id", count)
            ArchiveBtn.addEventListener('click', (event) => {
                archive(event)
            })
 
        }
 
    }
 
    function archive(event){
        let count2 = event.target.id;
        //let ArchiveBtn = [...[...document.getElementById(count).children][2].children][2]
        let currLi = Array.from(document.getElementById(count2).children)   
        let name2 = currLi[0].innerText
        let price = Number(Array.from(currLi[2].children)[0].innerText)
        let numberOfTickets = Number(Array.from(currLi[2].children)[1].value)
        let li
        if (numberOfTickets > 0 && !isNaN(numberOfTickets)){
                let total = (price * numberOfTickets).toFixed(2)
                //count2++
                li = addMovieToArchive(name2, total)
                li.setAttribute("id",`a${count2}`)
                let UL = Array.from(document.getElementById("archive").children)[1]
                UL.appendChild(li)
                let LI = document.getElementById(count2)
                LI.remove()
 
                let DeleteBtn = Array.from(document.getElementById(`a${count2}`).children)[2]
                DeleteBtn.setAttribute("id", `a${count2}`)
                DeleteBtn.addEventListener('click', (event) => {
                        Delete(event)
                    })
 
        }
 
 
    }
 
    function Delete(event){
        let currId = event.target.id;
        let LI = document.getElementById(currId)
        LI.remove()
    }
    function addMovieToArchive(name3, total) {
 
        return el("li",
        el("span",name3),
        el("strong", `Total amount: ${total}`),
        el("button", "Delete"));
 
    }
    function addMovie(name, hall, price) {
 
        return el("li",
            el("span",name),
            el("strong", `Hall: ${hall}`),
            el("div",
                el("strong",price.toFixed(2)),
                el("input"),
                el("button", "Archive"))
 
        );
 
    }
    function el(type, ...content){
 
        const result = document.createElement(type);
        if (type == "input"){
            result.setAttribute("placeholder", "Ticked Sold")
        }
 
        content.forEach(e => {
            if(typeof e == "string" || typeof e == "number"){
                const node = document.createTextNode(e);
                result.appendChild(node);
            }else{
                result.appendChild(e);
            }
        });
 
        return result;
    }
 
 
}