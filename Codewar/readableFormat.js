function formatDuration (seconds) {
    let ans = '';
    if(seconds/3600 >=1){
      ans+=`${Math.floor(seconds/3600)} hour`;
      if((seconds=seconds%3600) !== 0) ans += ', ';
      else return ans;
    }
    if(seconds/60>=1){
        ans+= `${seconds/60>=2?Math.floor(seconds/60)+' minutes':'1 minute'}`;
        if((seconds=seconds%60) !== 0) ans += ' and ';
        else return ans;
    }
    ans+= seconds>1?seconds+' seconds':'1 second';
    return ans;
    
  }

  console.log(formatDuration(7170))