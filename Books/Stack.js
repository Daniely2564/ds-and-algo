class Stack {
    constructor(){
        this.item = [];
    }
    push(element){
        this.item.push(element);
    }
    pop(){
        return this.item.pop();
    }
    list(){
        return this.item.toString();
    }
    isEmpty(){
        return this.item.length === 0;
    }
}

let binStack = new Stack();
let decNum = 12021;
while(decNum>0){
    binStack.push(decNum % 2);
    decNum = Math.floor(decNum/2);
}
let binNum = '';
while(!binStack.isEmpty()){
    binNum += binStack.pop().toString();
}
console.log(binNum);
