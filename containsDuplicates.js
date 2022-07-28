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
