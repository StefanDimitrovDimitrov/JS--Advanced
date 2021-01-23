function search() {
   // take the input 
   // loop over towns 
   // creat Array with the matched towns 

   let input = document.getElementById("searchText").value
   let counter = 0;
   let list = document.getElementsByTagName("li")
   for (let town of list) {
      if(town.innerHTML.includes(input)){
         counter++
         town.style.fontWeight  = "bold"
         town.style.textDecoration  = "underline" 
      }else{
         town.style.fontWeight  = "normal"
         town.style.textDecoration  = "none"  
      }
      document.getElementById("result").innerHTML = `${counter} matches found`
   }
}
