function narcissistic(value){

}
let arr = [1,3,4,5,6];
arr = arr.reduce((first,second)=>{
    console.log('First: '+first);
    console.log('Second: '+second);
    return first+second;
})
console.log(arr);