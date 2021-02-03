function getArticleGenerator(articles) {
    let counter = 0

    return ()=>{
            if (articles.length > counter){

                let theDiv = document.getElementById("content");
                let newText = document.createElement("article")
                newText.textContent = articles[counter]
                theDiv.appendChild(newText);

                counter++    
            }else{
                return
            }

            
        }

    
}
