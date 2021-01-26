function solve() {
  input = document.getElementById("input").value.split(".");
  let result = '';
  input.pop();
  let sentances = []
  for (let i = 0; i < input.length; i++) {
    text = input[i]
    if (sentances.length < 3){
      if(text != 0){
        sentances.push(text)
      }
    }else{
      result += `<p>${sentances.join(".")}.</p>`
      sentances = []
      sentances.push(text)
    }
  }
  result += `<p>${sentances.join(".")}.</p>`

  document.getElementById("output").innerHTML = result
}
