

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

function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}