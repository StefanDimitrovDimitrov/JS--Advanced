function solve() {

    let addBtn = document.getElementById('add')
    let sections = Array.from(document.querySelectorAll('section'))
    let [addTaskDivs,openDivs,inProgressDivs,completeDivs] = sections
    let open = Array.from(openDivs.children)[1]
    let inProgress = Array.from(inProgressDivs.children)[1]
    let complete = Array.from(completeDivs.children)[1]


    function createElement(type, text, attributes = []){
        let element = document.createElement(type);
        if(text){
            element.textContent = text;
        }

        attributes
            .map(attr => attr.split('='))
            .forEach(([name, value]) => {
                element.setAttribute(name, value);
            })
        
        return element 
    }

    addBtn.addEventListener('click', e =>{
        e.preventDefault()

        let task = document.getElementById('task');
        let description = document.getElementById('description');
        let date = document.getElementById('date');

        if(task.value === ''|| description.value === ''||date.value === ''){
            return;
        }
        const article = createElement('article',undefined);
        const h3Element = createElement('h3', task.value);
        const descriptionElement = createElement('p',`Description: ${description.value}`);
        const dateElement = createElement('p',`Due Date: ${date.value}`);
        const divElement = createElement('div',undefined,['class=flex'])
        const startBtn = createElement('button','Start',['class=green'])
        const delBtn = createElement('button','Delete',['class=red'])
        // const finishBtn = createElement('button','Finish',['class=orange'])

        startBtn.addEventListener('click', (e) =>{
            
            let changeToDeleteBtn = e.target
            let changeToDeleteBtnParent = e.target.parentElement
            let finishBtn = changeToDeleteBtnParent.lastChild
            changeToDeleteBtn.textContent = 'Delete';
            changeToDeleteBtn.className = 'red';
            finishBtn.textContent= 'Finish';
            finishBtn.className = 'orange';
            inProgress.appendChild(article)

            changeToDeleteBtn.addEventListener('click', (e)=>{
                let currentArticle2 = e.target.parentElement.parentElement
                currentArticle2.remove()
            })

            finishBtn.addEventListener('click', e =>{
                divDelete = e.target.parentElement
                divDelete.remove()
                complete.appendChild(article)
            })

        })

        delBtn.addEventListener('click', (e) =>{
            let currentArticle = e.target.parentElement.parentElement
            currentArticle.remove()
        })


        divElement.appendChild(startBtn)
        divElement.appendChild(delBtn)
        
        article.appendChild(h3Element)
        article.appendChild(descriptionElement)
        article.appendChild(dateElement)
        article.appendChild(divElement)

        open.appendChild(article)

        task.value = ''
        description.value = ''
        date.value = ''
    })

}
