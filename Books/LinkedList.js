function LinkedList() {
    let Node = function(element){ // {1}
        this.element = element;
        this.next = null;
    }; 
    let length = 0; // {2}
    let head = null; // {3}
    this.append = function(element){
        let node = new Node(element);
        let current;
        if(head===null){
            head=node;
        }else{
            current = head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        length++;
    };
    this.insert = function(position, element){

    };
    this.removeAt = function(position){};
    this.remove = function(element){};
    this.indexOf = function(element){
        let index = 0;
        while(current){
            if(current.element === element){
                return index;
            }
            current = current.next;
        }
    };
    this.isEmpty = function() {};
    this.size = function() {};
    this.toString = function(){
        let current = head;
        let string = '';
        while(current){
            string += current.element + (current.next?'-':'');
            current = current.next;
        }
        return string;
    };
    this.print = function(){};
}

let list = new LinkedList();
list.append(5);
list.append(12);
list.append(22);
list.append(4);
console.log(list.toString());
