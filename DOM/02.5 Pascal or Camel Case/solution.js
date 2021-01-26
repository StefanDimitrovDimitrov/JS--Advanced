function solve() {
  let text = document.getElementById("text").value

  let convention = document.getElementById("naming-convention").value

  console.log(text);
  if (!text.includes('')){
    text = text + " "
  }

  let arrText = text.split(' ');
  console.log(arrText);
  let btn = document.getElementsByTagName('input');
  btn[0].addEventListener("click", result())
  

  function result(){
    console.log(arrText);
    console.log(convention);
    if (convention == "Camel Case"){
      result = []
      let firstword = arrText.shift().toLowerCase()
      result.push(firstword)
      for (let word of arrText) {
        word =word.toLowerCase()
        word = word.charAt(0).toUpperCase() + word.substring(1);
        result.push(word.trim())
        
      }
      resultString = result.join('')
      console.log(resultString);
      document.getElementById('result').innerHTML = resultString
    }else if(convention == "Pascal Case"){
      result = []
      for (let word of arrText) {
        word = word.toLowerCase()
        word = word.charAt(0).toUpperCase() + word.substring(1);
        result.push(word.trim())
        
      }
      resultString = result.join('')
      console.log(resultString);
      document.getElementById('result').innerHTML = resultString
    }else{
      document.getElementById('result').innerHTML = "Error!"
    }
  }
}