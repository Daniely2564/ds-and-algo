let arr = [1,2,3];
console.log(arr);
arr.splice(1);
console.log(arr);
arr = [1,2,3];
arr.splice(1,1);
console.log(arr);

console.log('\nIndex of', [1,3,5].indexOf(3));


function LCS(x,y){
    let arr1 = x.split('');
    let arr2 = y.split('');
    let a = b = 0;
    let ans = [];
    while(a<arr2.length){
        console.log(arr1.indexOf(arr2[a]));
        if(arr1.indexOf(arr2[a])=== -1){
            a++;
            continue;
        }else{
            ans.push(arr1.splice(arr1.indexOf(arr2[a]),1));
            a++;
        }
    }
    return ans.join('');
}

console.log(LCS("132535365" , "123456789"));
