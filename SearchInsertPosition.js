var searchInsert = function(nums, target) {
    let left=0;
    let right=nums.length-1;

    while(left<=right){
        ///when num gets too big, use this to find mid
        let mid=Math.floor(left+(right-left)/2);
        ///if mid is the target, return mid//
        if(nums[mid]===target){
            return mid
        }else{
            console.log('else nums[mid]=>',nums[mid])
            if(target<nums[0]){
                mid=0;
                return mid
            }
            else if(nums[mid]<target && target< nums[mid+1]){
                mid=mid+1;
                return mid
            }
            else if(nums[nums.length-1]<target){
                mid=nums.length;
                return mid
            }


        }
        //check which side is sorted in array//  left or right
        ////if it is in the left side//
        if(nums[left]<=nums[mid]){
            //if it is///
            if(nums[left]<=target && target< nums[mid]){
                //update the right side//
                right=mid-1;
            }
            ////if not, update the left side///
            else{
                left=mid+1;
            }
        }
        ////if it is in the right side////
        else{
            ///if it is////
            if(nums[mid]<target&& target<=nums[right]){
                left=mid+1
            }
            ///if not//
            else{
              right=mid-1;
            }
        }
    }

};


var searchInsert = function(nums, target) {

    let left=0;
    let right=nums.length;

    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(nums[mid]===target){
            return mid;
        }else if(nums[mid]<target){
            left++;
        }else{
            right--
        }
    }
    return left
};
