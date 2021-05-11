// const fruitBag = ["apple", "bananana"]
// fruitBag.push("orange")
// console.log(fruitBag)

class MyArray{
    constructor(){
        this.length = 0
        this.data = {}
    }
    get(index){
        return this.data[index]//o(1)
        
    }
    push(item){//o(1)
        this.data[this.length] = item
        this.length++
    }

    pop(){
        const lastItem = this.data[this.length-1]
        delete this.data[this.length - 1]
        this.length--
        return lastItem
    }
    //o(n)
    shift(){
        const firstItem = this.data[0]
        for (let i = 0; i < this.length-1; i++) {//o(n)
            this.data[i] = this.data[i + 1]//o(1)
            
        }
        delete this.data[this.length - 1]
        this.length--
        return firstItem
    }
  unshift(item){
      const tempArg = {}
      tempArg[0] = item

      for (let i = 0; i < this.length; i++) {
          tempArg[i+1] = this.data[i]
      }
      this.length++
      this.data = tempArg
  }

}

const myArgs = new MyArray()
myArgs.push("apple")
console.log(myArgs.unshift("lemon"))
// myArgs.push("banana")

// console.log(myArgs.get(1))
// console.log(myArgs.pop())
// console.log(myArgs.shift())
// console.log(myArgs.unshift())


// console.log(myArgs.shift)