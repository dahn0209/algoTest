/**
 * @param {number[]} nums
 * @return {number}
 [1,7,3,6,5,6]
 leftSum=0+1+7+8
 28-(leftSum=0)-(nums[0]=1)!==0
 28-(leftSum=1)-(nums[1]=7)!==1
 28-(leftSum=8)-(nums[2]=3)!==8
 28-(leftSum=11)-(nums[0]=6)===11
 */
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
