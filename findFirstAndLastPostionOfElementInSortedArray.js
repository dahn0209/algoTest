var searchRange = function(nums, target) {

    let result=[];
    let left=0;
    let right=nums.length-1;

    while(left<=right){

        if(nums[left]===target &&nums[right]===target){
            result.push(left,right)
            break
        }
        else if(nums[left]!==target &&nums[right]!==target){
           left++;
            right--;
        }
        else if(nums[left]===target && nums[right]!==target){
            right--;
        }
        else if(nums[left]!==target &&nums[right]===target){
            left++;
        }

    }

    if(result.length===0){
        return [-1,-1]
    }else{
        return result
    }
};
