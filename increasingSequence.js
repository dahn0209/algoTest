function increasingSequence(arr){

    for(let i=0;i<arr.length;i++){
      let newArr=arr.slice(0,i).concat(arr.slice(i+1));
      let start=0;
      
      while(start<newArr.length){
        if(newArr[start]<newArr[start+1]){
           start++;
        }
  
        if((newArr[start]>=newArr[start+1])){
          break
        }
  
        if(start===newArr.length-1){
          return true;
        }
      }
    
    }
   return false
  }