class Queue {
    constructor(){
        this.item = [];
    }
    enqueue(element){
        this.item.push(element);
    }
    dequeue(){
        return this.item.shift();
    }
    front(){
        return this.item[0];
    }
    isEmpty(){  
        return this.item.length === 0;
    }
    size(){
        return this.item.length;
    }
    print(){
        return this.item.toString();
    }
}

const queue = new Queue();
queue.enqueue('hi');
queue.enqueue('My');
queue.enqueue('name');
queue.enqueue('is');
console.log(queue.print());

const queue2 = Object.assign({},queue);
console.log(queue);
queue.size();
queue2.size();  