function solution() {
    let input = Array.from(document.querySelectorAll('input'))[0]
    let sections = Array.from(document.querySelectorAll('section'))
    let [addGift, listGift, sentGift, discardedGift] = sections

    let ulListElement = listGift.querySelector('ul')
    let ulSentElement = sentGift.querySelector('ul')
    let ulDiscElement = discardedGift.querySelector('ul')

    let addBtn = Array.from(document.querySelectorAll('button'))[0]

    function sortList(ulListElement) {

        Array.from(ulListElement.getElementsByTagName("li"))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => ulListElement.appendChild(li));
    }
    function createElement(type, text, attributes = []) {
        let element = document.createElement(type);
        if (text) {
            element.textContent = text;
        }

        attributes
            .map(attr => attr.split('='))
            .forEach(([name, value]) => {
                element.setAttribute(name, value);
            })

        return element
    };
    function sendItem(ev) {
        let parentElement = ev.target.parentElement
        while (parentElement.childNodes.length > 1) {
            parentElement.removeChild(parentElement.lastChild);
        }
        ulSentElement.appendChild(parentElement)

    };
    function disItem(ev) {
        let parentElement = ev.target.parentElement
        while (parentElement.childNodes.length > 1) {
            parentElement.removeChild(parentElement.lastChild);
        }
        ulDiscElement.appendChild(parentElement)
    };
    addBtn.addEventListener('click', e => {
        e.preventDefault()
        let liElement = createElement('li', input.value)
        let sendBtn = createElement('button', 'Send', ['id=sendButton'])
        let disBtn = createElement('button', 'Discard', ['id=discardButton'])

        liElement.appendChild(sendBtn)
        liElement.appendChild(disBtn)
        ulListElement.appendChild(liElement)

        sortList(ulListElement)
        sendBtn.addEventListener('click', sendItem)

        disBtn.addEventListener('click', disItem)
        input.value = ''
    })
}


//     
// let allLiElements = Array.from(giftsUl.querySelectorAll('li'));
// let sortedLiElements = allLiElements.sort((a, b) => a.textContent.localeCompare(b.textContent));