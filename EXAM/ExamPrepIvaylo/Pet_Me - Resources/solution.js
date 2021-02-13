function solve() {
// take the input fields    
    let addBtn = document.querySelector('#container button');
    let inputE = Array.from(document.querySelectorAll('#container input'));
    let [nameE,ageE,kindE,ownerE] = inputE;
    let adoptionUlE = document.querySelector('#adoption ul');
    let adoptedUlElement = document.querySelector('#adopted ul')
 //add eventListener to AddBtn collect the input   

    addBtn.addEventListener('click', e => {
        e.preventDefault();
        // check if each value fild has a data
           if(!inputE.every(x => x.value)){
               return;
           }
       // check if field age has number as a value if not exit 
           if(!Number(ageE.value)){ 
               return;
           }
      // Create list item
      
      let liElement = document.createElement('li')
      let pElement = document.createElement('p');
      let spanElement = document.createElement('span');
      let petBtn = document.createElement('button')

      // add info to the pELement, spat and btn
        pElement.innerHTML = `<strong>${nameE.value}</strong> is a <strong>${ageE.value}</strong> year old <strong>${kindE.value}</strong>`;
        spanElement.textContent = `Owner: ${ownerE.value}`;
        petBtn.textContent = `Contact with owner`;
        //add them to the liElemnt
        liElement.appendChild(pElement)
        liElement.appendChild(spanElement)
        liElement.appendChild(petBtn)
           
        //ADD LI TO uL
        adoptionUlE.appendChild(liElement)

        // CLEAR INPUT

        nameE.value = '';
        ageE.value = '';
        kindE.value = '';
        ownerE.value = '';
        //add event handler to petBTN
        petBtn.addEventListener('click',petBtnClick)
    });

    function petBtnClick(e) {
        //find the perent of the eventTarget (li)
        let parent = e.currentTarget.parentElement;
        //remove current target evenet
        e.currentTarget.remove();
        // create div, input, button
        let divE = document.createElement('div');
        let inputE = document.createElement('input');
        let takeBtn = document.createElement('button');
        //set attribute + textCOntent placeholder to input element
        inputE.setAttribute('placeholder', 'Enter your names');
        takeBtn.textContent = 'Yes! I take it!';
        //add the elements to the Dom with appendChild first to the dive second to the parent
        divE.appendChild(inputE);
        divE.appendChild(takeBtn);

        parent.appendChild(divE);
        //add EventListener to the button + new function
        takeBtn.addEventListener('click', onTakeBtnClick)
    }

    function onTakeBtnClick(e){
        // take parent of event of the current button
        let parentBtnE = e.currentTarget.parentElement
        // take li element which is the parenet of the parent of current target 
        let liElement = parentBtnE.parentElement;
        //select new Owner field and owner Name Span
        let newOwnerInputElement = liElement.querySelector('input');
        let ownerNameSpanElement = liElement.querySelector('span');
        //take the value of new OwnerName 
        let newOwnerName = newOwnerInputElement.value;
        //check if it is filed if not return(exit)
        if(!newOwnerName){
            return;
        }
        // add text contect to onwer name Span 
        ownerNameSpanElement.textContent = `New Owner: ${newOwnerName}`;
        //add li element to the ULElement
        adoptedUlElement.appendChild(liElement);
        //remove parentBTNE which we took in the biggining
        parentBtnE.remove();
        //create new btn named 'Checked'
        let checkedBtnE = document.createElement('button');
        checkedBtnE.textContent = 'Checked';
        //add it to the DOM to the li 
        liElement.appendChild(checkedBtnE)
        //add event LIsener removing the li. 
        checkedBtnE.addEventListener('click', e =>{
            liElement.remove()
        })
    }
}

