// function anagrams(target, words) {
//     target = target.split('').sort();
//     return words.filter((word)=>{
//       if(word.length !== target.length) return false;
//       let arr = word.split('').sort();
//       for(let i = 0;i<arr.length;i++)if(target[i]!==arr[i])return false;
//       return true;
//     });
// }


String.prototype.sort = function() {
    return this.split("").sort().join("");
  };
  
  function anagrams(word, words) {
    return words.filter(function(x) {
        return x.sort() === word.sort();
    });
  }
  console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
