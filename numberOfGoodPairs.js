var numIdenticalPairs = function(nums) {

    let obj={};

    for(let i=0;i<nums.length;i++){
        obj[i]=0;
    }
    let result=0;
    for(let key in obj){
        for(let i=parseInt(key)+1;i<nums.length;i++){
            if(nums[key]===nums[i]){
                result++;
            }  
        }
    }

    return result

    
    
};



var numIdenticalPairs = function(nums) {

    let left=0;
    let right=nums.length-1;
    let result=0;

    while(left<right){
       if(nums[left]===nums[right]){
           result++;
           right--
       }else{
        right--;
       }
       if(right===left){
           right=nums.length-1;
           left++;
       }
    }

    return result    
    
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {

    let left=0;
    let right=1;
    let result=0;

    while(left<nums.length && right<nums.length&& left<right){

        if(nums[left]===nums[right]){
            result++;
            right++
        }else{
            right++
        }

        if(right===nums.length){
            left++;
            right=left+1
        }
    }

    return result    
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {

    let count=0;

    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j,j<nums.length;j++){
            if(nums[i]===nums[j]){
                count++;
            }
        }
    }  

    return count 
};