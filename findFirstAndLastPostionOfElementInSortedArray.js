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


var searchRange = function(nums, target) {

    if(nums.length==0){
        return [-1,-1]
    }

    let result=[];
    let left=0;
    let right=nums.length-1;
    let lo=-1;
    let hi=-1;

    while(left<=right){

        const mid=Math.floor((left+right)/2);
console.log('target=>',target,'midFirst=>',mid,'nums[mid]=>',nums[mid])
       if(target<=nums[mid]){
            right=mid-1;
           console.log('right 1loop=>',right)
        }else left=mid+1;   console.log('left 1loop=>',left)

    }
    lo=left;
    console.log('lo=>',lo)
    left=0;
    right=nums.length-1;

     while(left<=right){

        const mid=Math.floor((left+right)/2);
         console.log('target=>',target,'midSec=>',mid,'nums[mid]=>',nums[mid])
       if(target<nums[mid]){
            right=mid-1;
        }else left=mid+1;
    }
    hi=right;
    console.log('hi=>',hi)

    return lo<=hi ? [lo,hi] : [-1,-1]

};
