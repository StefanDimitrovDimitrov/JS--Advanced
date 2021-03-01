function solve(){
   let inputs= Array.from(document.querySelectorAll('input'))
   let [nameA, title, category] = inputs
   let textArray = document.getElementById("content")
   let btnCreate = document.getElementsByTagName('button')[0]
   let h2Post = document.getElementsByTagName('h2')[0]
   let h2Archive = document.getElementsByTagName('h2')[1]
   let olElement = document.querySelector('ol')
   
   // function sortList(allLis) {

   //    //  Array.from(allLis.getElementsByTagName("li"))
   //    allLis
   //         .sort((a, b) => a.textContent.localeCompare(b.textContent))
   //         .forEach(li => olElement.appendChild(li));
   // }

   
   function sortList(olElement, liElement) {
      olElement.appendChild(liElement)
      let allLis =  Array.from(olElement.getElementsByTagName("li"))
      if (allLis.length>1){
         allLis.sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(li => olElement.appendChild(li));
       }

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

   btnCreate.addEventListener('click', e =>{
      e.preventDefault()

      let articleElement = createElement('article')
      let h1Element = createElement('h1',title.value)
      let pCategory = createElement('p','Category:')
      let strongCategory = createElement('strong', category.value)
      let pCreator = createElement('p','Creator:')
      let strongName = createElement('strong', nameA.value)
      let pContent = createElement('p', textArray.value)
      let divButtons = createElement('div','',['class=buttons'])
      let btnDel = createElement('button','Delete',['class=btn delete'])
      let btnArc = createElement('button','Archive',['class=btn archive'])

      pCategory.appendChild(strongCategory)
      pCreator.appendChild(strongName)
      divButtons.appendChild(btnDel)
      divButtons.appendChild(btnArc)
      articleElement.appendChild(h1Element)
      articleElement.appendChild(pCategory)
      articleElement.appendChild(pCreator)
      articleElement.appendChild(pContent)
      articleElement.appendChild(divButtons)
     
      let h2SectionPost = h2Post.parentElement


      h2SectionPost.appendChild(articleElement)


      btnArc.addEventListener('click', (e)=>{
         let currentArticle = e.target.parentElement.parentElement
         let tittle = currentArticle.firstChild.innerHTML
         currentArticle.remove()
         let liElement = createElement('li', tittle)
         //let allLis = Array.from(olElement.querySelectorAll('li'))
         sortList(olElement, liElement)
         //olElement.appendChild(allLis)
      })

      btnDel.addEventListener('click', (e)=>{
         let currentArticle = e.target.parentElement.parentElement
         currentArticle.remove()
      })

   })




}
