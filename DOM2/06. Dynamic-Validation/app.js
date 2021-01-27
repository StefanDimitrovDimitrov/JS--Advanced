function validate() {
    //selelct input field add change event lisetner
    //on change -> valdate input
    //if invalid - add class error
    //else -> remove class error 

    document.getElementById('email').addEventListener('change',onChange);

    function onChange(ev){
        const email = ev.target.value;
        if (/^[a-z]+@[a-z]+\.[a-z]+$/.test(email)){
            ev.target.className = '';
        }else{
            ev.target.className = 'error'
        }
    }

}