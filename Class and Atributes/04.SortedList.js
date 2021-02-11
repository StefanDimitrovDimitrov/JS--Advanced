class List{
    constructor(){
        this.arr = []
        this.arr.sort((a,b)=>a-b)
        this.size = this.arr.length
    }

    add(element){
        this.arr.sort((a,b)=>a-b)
        return new List(this.arr.push(element))
    }
    remove(index){
        this.size = this.arr.length
        if (index < this.size) {
            this.arr.sort((a,b)=>a-b)
            return new List(this.arr.splice(index, 1))
        }
    }

    get(index){
        this.arr.sort((a,b)=>a-b)
        this.size = this.arr.length
        if(index < this.size){
            return this.arr[index]
            
        }
    }

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));

class List {
    constructor() {
        this.arr = []
        this.size = 0
    }

    add(element) {
        this.arr.push(element)
        this.size ++
        return this.arr.sort((a, b) => {
            return a - b
        })
    }

    remove(index) {
        if (this.arr.length > index && index >= 0) {
            this.arr.splice(index, 1)
            this.size--
        } else {
            throw new Error
        }
        return this.arr.sort((a, b) => {
            return a - b
        })
    }

    get(index) {
        if (this.arr.length > index && index >= 0) {
            return this.arr[index]
        } else {
            throw new Error
        }
    }
}