function score(dice){
    let map = new Map();
    dice.forEach((item)=>{
        map.set(item,map.get(item)+1||1);
    });
    let total = 0;
    for(let key of map.keys()){
        if(map.get(key)>=3){
            total+=key==1?key*1000:key*100;
            map.set(key,map.get(key)-3);
        }
    }
    console.log(map.get(1));
    total += map.get(1)*100 || 0;
    total += map.get(5)*50 || 0;
    return total;
}

console.log(score([ 1 ,1 ,1 ,3 ,1]));
