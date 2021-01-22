function start(){
    const liElements = document.getElementsByTagName("li");
    Array.from(liElements).map(e=>console.log(e))
}


function extractText() {
    let itemNodes =
        document.querySelectorAll("ul#items li");
    let textarea = 
        document.querySelector("#result");
    for (let node of itemNodes){
        textarea.value += node.textContent + "\n";
    }
}