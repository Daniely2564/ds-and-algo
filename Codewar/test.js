function isValidWalk(walk) {
    let x = 0;
    let y = 0;
    walk.forEach((alph)=>{
        switch(alph){
        case 'n':return x++;
        case 's':return x--;
        case 'e':return y++;
        case 'w':return y--;
        }
    })
    return x === 0 && y === 0;
}

  console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])==true)