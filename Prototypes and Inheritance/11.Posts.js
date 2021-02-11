function solve() {
 
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
 
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }
 
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
 
        addComment(comment) {
            this.comments.push(comment);
        }
 
        toString() {
            let parentString = super.toString();
            let output = `${parentString}\nRating: ${this.likes - this.dislikes}\n`
            if (this.comments.length != 0) {
                output += `Comments:\n`;
                this.comments.forEach(x => output += ` * ${x}\n`);
            }
            return output.trim();
        }
    }
 
    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }
 
        view() {
            this.views++;
            return this;
        }
 
        toString() {
            let parentString = super.toString();
            let output = `${parentString}\nViews: ${this.views}`;
            return output;
        }
    }
 
    return { Post, SocialMediaPost, BlogPost }
}