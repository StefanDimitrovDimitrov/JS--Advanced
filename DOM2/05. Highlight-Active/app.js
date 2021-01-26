function focus() {
    // select all input fields
    // add lister for focus event
    // pnFocus -> select input parent -> apply class "focused"
    // all lister for blur event 

    Array.from(document.querySelectorAll('input')).forEach(i =>{
        i.addEventListener("focus", onFocus);
        i.addEventListener('blur', onBlur);
    })

    function onFocus(ev){
        ev.target.parentNode.className = "focused";
    }
    
    function onBlur(ev){
        ev.target.parentNode.className = '';
    }
}