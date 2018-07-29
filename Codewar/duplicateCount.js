function duplicateCount(text){
    text = text.toLowerCase();
    let map = new Map();
    text.split('')
        .map((letter)=>{
            map.set(letter,map.get(letter)+1||1);
        });
    let max = count=0;
    for(let value of map.values()) {if(max<value)max=value}
    for(let value of map.values()) if(max===value)count++;
    return count;
}
console.log(duplicateCount('1243124321'));