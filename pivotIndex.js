var pivotIndex = function(nums) {

    let sum=0;
    for(let eachNum of nums){
        sum+=eachNum
    }
    let leftSum=0;
    for(let i=0;i<nums.length;i++){
        if(sum-leftSum-nums[i]===leftSum){
            return i
        }
        leftSum+=nums[i]
    }
    return -1
};
