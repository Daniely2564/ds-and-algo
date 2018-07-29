var Harshad = ( function() {
    'use strict';
  
    return {
      /**
       * Returns true when the given number is a valid Harshad number.
       *
       * @param {Number} number The given number
       * @returns {Boolean}
       * @function Harshad.isValid
       */
      isValid: function( number ) {
        let num = number+'';
        let div = 0;
        for(let letter of num){
          div+=new Number(letter);
        }
        return (number%div === 0);
      },
      getNext: function( number ) {
        while(true){
          if(this.isValid(++number)){
            return number;
          }
        }
      },
      /**
       * Returns the suite of Harshad numbers, starting after a given number.
       *
       * @param {Number} count The number of elements to return
       * @param {Number} start The number after which the serie should start;
       *  defaults to 0
       * @returns {Array}
       * @function Harshad.getSerie
       */
      getSerie: function( count, start = 0 ) {
        let arr = [];
        for(let i = 0;i<count;i++){
            arr.push(start = this.getNext(start));
        }
      }
    };
  
  } () );

function isValid(number){
    let num = number+'';
    let div = 0;
    for(let letter of num){
        div+= new Number(letter);
    }
    console.log(div);
}

// console.log(Harshad.getNext(18));
// console.log(typeof parseInt('1'));
console.log("x".repeat(5));
console.log(/cat/.test('cat goes meow'));