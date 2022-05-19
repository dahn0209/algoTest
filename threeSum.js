var threeSum = function(nums) {
    let result=[];

    let sortedNum=nums.sort((a,b)=>a-b);

    for(let i=0;i<nums.length;i++){
        if(i>0 && nums[i] === nums[i-1]) continue

        const target=0-nums[i];
        let left=i+1;
        let right=nums.length-1;

        while(left<right){
            const sum=nums[left]+nums[right];
            if(sum>target){
                right--;

            }
            else if(sum<target){
               left++;
            }
            else{
               result.push([nums[left],nums[right],nums[i]])
                while(nums[left]===nums[left+1]) left++;
                while(nums[right]===nums[right-1]) right--;
                left++;
                right--;

            }
        }

    }
    return result

};
