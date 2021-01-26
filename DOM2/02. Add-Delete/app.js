function addItem() {
  function createElementFactory(type,content){
    const element = document.createElement(type);
    element.textContent = content;
    return element
  }

  const textInput = document.getElementById("newText")
  const liElement = createElementFactory('li',textInput.value)

  //add delete button
  const deleteBtn = createElementFactory('a', '[Delete]');
  deleteBtn.href = '#';
  deleteBtn.addEventListener("click",(ev) =>{
    ev.target.parentNode.remove();
  });
  liElement.appendChild(deleteBtn);

  document.getElementById("items").appendChild(liElement);
  textInput.value = '';

}