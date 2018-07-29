function tripledouble(num1, num2) {
    let map = new Map();
    for(let char of num1){
      map.set(char, map.get(char)+1 || 1);
    }
    let key = '';
    for(let val of map.keys()){
        if(map.get(val)==3){
            key = val;
            return num2.includes(key.repeat(2))?1:0;
        }
    }
    return 0;
  }

  console.log(tripledouble("12312344","1123"));