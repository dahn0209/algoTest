var containsDuplicate = function(nums) {

    nums.sort((a,b)=>a-b)

    let left=0;
    let right=nums.length;

    let result=false;

    while(left<right){
        if(nums[left]===nums[left+1]){
            result=true
            break
        }else{
            left++
        }
        if(left>nums.length-1){
            break
        }
    }
    return result
};


var containsDuplicate = function(nums) {

    nums.sort((a,b)=>a-b)
    let result=false;

    for(let i=0;i<nums.length;i++){
        if(nums[i]===nums[i+1]) result=true
    }

   return result
};


var containsDuplicate = function(nums) {

    let numsObj={}

   for(let eachNum of nums){
       if(eachNum in numsObj){
           numsObj[eachNum]+=1;
       }else{
           numsObj[eachNum]=1
       }
   }
    let result=false
    for(let eachNum in numsObj){
        let val=numsObj[eachNum];
        if(val>1){
            return true
        }
    }
    return result
};
