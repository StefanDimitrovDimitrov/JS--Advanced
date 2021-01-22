function solve() {
  let text = getElementById("text").value
  let convention = getElementById("naming-convention").value
  
  let btn = document.getElementsByTagName("button")[0];
  btn.addEventListener("click", result)
  text = text.split(" ");

  function result(){
    if (convention = "Camel Case"){
      result = []
      firstWord = text.shift().toLowerCase
      result.push(firstword)
      for (const word of text) {
        word[0].toUpperCase
        result.push(word)
      }
    }
    // }else if(convention = "Pascal Case"){
    // //'''
    // }else{
    //   //...
    // }
  }
}