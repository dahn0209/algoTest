var removeElement = function(nums, val) {

    let left=0;
    let right=nums.length;

    while(left<right){
        if(nums[left]!==val){
            left++
        }
        if(nums[left]===val){
            const removedNum=nums.splice(left,1)
        }
    }
};











