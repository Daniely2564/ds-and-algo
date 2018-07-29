let numbers = [1,3,5,7,9];

function Stack(){
    let items = [];
    this.push = function(element){
        items.push(element)
    }
    this.pop = function(){
        return items.pop();
    }
    this.getArr = function(){
        return items;
    }
    this.peek = function(){
        return items[items.length-1];
    }
    this.size = function(){
        return items.length;
    }
}

class Stack {
    constructor(){
        this.item = [];
    }
}

let a = new Stack();
a.push(1);
a.pop();

console.log(a.getArr());