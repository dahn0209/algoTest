var search = function(nums, target) {

    if(!nums){
        return -1
    }

    let left=0;
    while(left!=nums.length){
        if(nums[left]===target){
            return left
        }else{
            left++
        }
    }
    return -1
};

//  l     r
///[1,2,3,4,5,6,7,8,9]     //2

//         l    r
// [-1,0,3,5,9,12]   //9

///binsary search
var search = function(nums, target) {

    let left=0;
    let right=nums.length-1

    while(left<=right){
        let mid=left+Math.floor((right-left)/2)
        if(nums[mid]===target){
            return mid
        }else if(nums[mid]<target){
            left=mid+1;
        }else if(nums[mid]>target){
            right=mid-1;
        }

    }
    return -1
};
