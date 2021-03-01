

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


function createElement(type, text) {
    let element = document.createElement(type);
    if (text) {
        element.textContent = text;
    }
    return element
};