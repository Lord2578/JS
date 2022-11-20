class Stack {
    constructor() {
        this.items = []
        this.count = 0
        this.evenItems = []
        this.oddItems = []
    }

    // Додає елемент до стека
    push(element) {
        this.items[this.count] = element
        console.log(`${element} added to ${this.count}`)
        this.count += 1
        return this.count - 1
    }

    // Забирає елемент з стеку
    pop() {
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count - 1]
        this.count -= 1
        console.log(`${deleteItem} removed`)
        return deleteItem
    }

    // Перевіряє останній елемент
    peek() {
        console.log(`Top element is ${this.items[this.count - 1]}`)
        return this.items[this.count - 1]
    }

    // Перевіряє на пустоту
    isEmpty() {
        console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty')
        return this.count == 0
    }

    // Записує елемент
    print() {
        let str = ''
        for(let i = 0; i < this.count; i++) {
            str += this.items[i] + ' '
        }
        return str
    }

    // Розділяє на парні і непарні

    odd(){
        let counter = 0
        this.items.forEach((element,i)=>{
            if(element%2==1){
                this.oddItems[counter]=element
                counter++
            }
        }) 
        console.log(`Непарні числа: ${this.oddItems}`);
    }

    even(){
        let counter=0
        this.items.forEach((element,i)=>{
            if(element%2==0){
                this.evenItems[counter]=element
                counter++
            }
        }) 
        console.log(`Парні числа: ${this.evenItems}`);
    }
}

let a = prompt("")
let b = prompt("")
let c = prompt("")
let d = prompt("")
let k = prompt("")
let l = prompt("")
let v = prompt("")
let x = prompt("")
let n = prompt("")

const stack = new Stack()

stack.isEmpty()

stack.push(a)
stack.push(b)
stack.push(c)
stack.push(d)
stack.push(k)
stack.push(l)
stack.push(v)
stack.push(x)
stack.push(n)

stack.peek()

stack.isEmpty()


console.log(stack.print())

stack.even()
stack.odd()


stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()

stack.isEmpty()

