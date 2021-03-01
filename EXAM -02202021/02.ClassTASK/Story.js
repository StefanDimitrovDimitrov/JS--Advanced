class Story{

    constructor(title, creator){
        this.title = title
        this.creator = creator
        this._comments = []
        this._like =[]
    }

    get likes (){
        let likes = this._like.filter(x=>x.likes.includes(this.title))
        
        if(likes.length == 0){
            return `${this.title} has 0 likes`
        }else if(likes.length == 1){
            return `${likes[0].username} likes this story!`
        }else{
            return `${likes[0].username} and ${likes.length} others like this story!`
        }
    }
    
    like (username){
        let currentuser = this._like.find(x=>x.username == username)
        if(username == this.creator){
            throw new Error(`You can't like your own story!`)
        }
        if(currentuser){
            throw new Error(`You can't like the same story twice!`)
        } 
        

        let newUser = {
            'id': this._like.length + 1,
            'username': username,
            'likes': [],
            'dislikes':[]
        }

        newUser.likes.push(this.title)

        this._like.push(newUser)
        return `${username} liked ${this.title}!`
    }

    dislike (username){
        let currentUser = this._like.find(x=>x.username == username)
    
        if(currentUser){
            if(currentUser.dislikes.includes(this.title)){
                throw new Error("You can't dislike this story!")
            }else{
                let index = this._like.indexOf(currentUser)
                this._like[index].dislikes.push(this.title)

                let indexStory = this._like[index].likes.indexOf(this.title);
                if (indexStory !== -1) {
                    this._like[index].likes.splice(indexStory, 1);
                    }

                return `${username} disliked ${this.title}`
            }
        }else{

        let newUser = {
            'id': this._like.length + 1,
            'username': username,
            'likes': [],
            'dislikes':[]
        }
        username.dislikes.push(this.title)
        this._like.push(newUser)
        return `${username} disliked ${this.title}`
        }
    }

    comment (username, content, id){

        let currentobjID = this._comments.find(x => x.id == id)

        
        if(!currentobjID){

            let newCom = {
                id: this._comments.length+1,
                username: username,
                content: content,
                replies: []
            }
            this._comments.push(newCom)
            return `${username} commented on ${this.title}`
        }else{
            
            let indexID = this._comments.indexOf(currentobjID)
            let add = (currentobjID.replies.length+1)/10
            let newRep = {
                id: currentobjID.id + add,
                username: username,
                content: content,
            }
    
            this._comments[indexID].replies.push(newRep)
            return "You replied successfully"
        }


    }

    toString (sortingType){
        let result = `\nTitle: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._like.length}\nComments:\n`  
        
        let idLen = this._comments.length



        

        if(idLen == 0){
            return result.trim()
        }
        if(idLen == 1){
            if (this._comments.replies.length == 0){
                result += `--${this._comments.id}. ${this._comments.username}: ${this._comments.content}\n`
                return result.trim
            }else if (this._comments.replies.length == 1){
                result += `--${this._comments.id}. ${this._comments.username}: ${this._comments.content}\n---${this._comments.replies.id}. ${this._comments.replies.username}: ${this._comments.replies.content}`
                return result
            }else{

                if(sortingType === 'acd'){
                    this._comments.sort((a, b) => {
                        a.replies.length <= 1 ? a.replies : a.replies.sort((c, d) => c.id-d.id)
                        b.replies.length <= 1 ? b.replies : b.replies.sort((c, d) => c.id-d.id)
                        return a.id-b.id})
                }else if(sortingType === 'desc'){
                    this._comments.sort((a, b) => {
                        a.replies.length <= 1 ? a.replies : a.replies.sort((c, d) => d.id-c.id)
                        b.replies.length <= 1 ? b.replies : b.replies.sort((c, d) => d.id-c.id)
                        return b.id-a.id})
                }else if(sortingType === 'username'){
                    this._comments.sort((a, b) => {
                        a.replies.length <= 1 ? a.replies : a.replies.sort((c, d) => c.username.localeCompare(d.username))
                        b.replies.length <= 1 ? b.replies : b.replies.sort((c, d) => c.username.localeCompare(d.username))
                        return a.username.localeCompare(b.username)})

                    }
            }
        }
        if(idLen > 1){

            if(sortingType === 'acd'){
                this._comments.sort((a, b) => {
                    a.replies.length <= 1 ? a.replies : a.replies.sort((c, d) => c.id-d.id)
                    b.replies.length <= 1 ? b.replies : b.replies.sort((c, d) => c.id-d.id)
                    return a.id-b.id})
            }else if(sortingType === 'desc'){
                this._comments.sort((a, b) => {
                    a.replies.length <= 1 ? a.replies : a.replies.sort((c, d) => d.id-c.id)
                    b.replies.length <= 1 ? b.replies : b.replies.sort((c, d) => d.id-c.id)
                    return b.id-a.id})
            }else if(sortingType === 'username'){
                this._comments.sort((a, b) => {
                    a.replies.length <= 1 ? a.replies : a.replies.sort((c, d) => c.username.localeCompare(d.username))
                    b.replies.length <= 1 ? b.replies : b.replies.sort((c, d) => c.username.localeCompare(d.username))
                    return a.username.localeCompare(b.username)})
        
            }

            for (const obj of this._comments) {
                result +=`--${obj.id}. ${obj.username}: ${obj.content}\n`
                if(obj.replies.length > 0){
                 obj.replies.forEach(x =>{ result +=`---${x.id}. ${x.username}: ${x.content}\n`
                })
                }
            }

            return result
        }
    }
    
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));



