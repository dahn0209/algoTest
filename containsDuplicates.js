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


var containsDuplicate = function(nums) {
    //create memory
    //Go through array and see if what I see now is something i've seen before.
        //if my number is never seen before, put in memory
        //if the number does exist in memory, return true
    //[1,2,3,1]//
    let memory={};
    for(let eachNum of nums){
        if(memory[eachNum]===undefined){
            memory[eachNum]='haha'
        }else{
            return true
        }
    }
    return false
};


////Time Complexity o(N)
/////Space complexity o(N)




var containsDuplicate = function(nums) {

    nums.sort((a,b)=>a-b)

    let left=0;
    let right=nums.length;


    while(left<right){
        if(nums[left]===nums[left+1]){
            return true
        }else{
            left++
        }
        if(left>nums.length-1){
            break
        }
    }
    return false
};



var containsDuplicate = function(nums) {
   //sort our input array//
    nums.sort((a,b)=>a-b);

    for(let i=0;i<nums.length;i++){
        if(i>0&& nums[i-1]===nums[i]){
            return true
        }
    }
    return false
};
