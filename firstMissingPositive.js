var firstMissingPositive = function(nums) {
    let x=1
   nums.filter(x => x>=1)
       .sort((a,b)=>a-b)
       .map((val,i,arr)=>{
       // console.log('val=>',val,'i->',i,'arr=>',arr)
       if(x<arr[i]){
          // console.log(`${x}<${arr[i]}`,x<arr[i])
           return
       }else{
           // console.log('xBefore=>',x)
           x=arr[i]+1;
           // console.log('xAfter=>',x)
       }

   })
    return x
};
