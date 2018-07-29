const moveZeroes = (arr)=>{
    let count = 0;
    arr = arr.filter((item)=>{
        if(item !== 0){
            return true;
        }else{
            count++;
            return false;
        }
    });
    for(let i = 0;i<count;i++)arr.push(0);
    return arr;
}

console.log(moveZeroes([false,1,2,0,1,0,1,0,3,0,1]))