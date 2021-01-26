function create(words) {
   let content = document.getElementById('content');
   words.forEach(word => {
      let div = document.createElement('div');
      let p = createElement("p", word)

      div.addEventListener("click", () => {
         p.style.display = "block"
      });
      
      div.appendChild(p);
      content.appendChild(div)
   })

   function createElement(type, content){
      const element = document.createElement(type);
      element.textContent = content;
      element.style.display = "none"
      return element
   }
}