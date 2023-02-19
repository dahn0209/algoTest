var maxSubArray = function(nums) {

    let solution=nums[0];

    for(let i=1;i<nums.length;i++){
        nums[i]=Math.max(nums[i],nums[i]+nums[i-1]);
        solution=Math.max(solution,nums[i]);
    }
    return solution
    
};

var maxSubArray = function(nums) {

    ///Cadene Algo////
    /////nums = [-2,1,-3,4,-1,2,1,-5,4]
    /////starting point---> Is -2 and 1 larger than 1 in index 1, no b/c -2+1=-1 which is less than 1
    /////////therefore current=1
    //////////max=1
    //////if -3 better than 1+(-3); no
    //////current=1,-2
    /////max=1

    //////////current=1,-2,4,3,5,6,1,5
    ///global sum//max=1,4,5,6,
        let maxSum=nums[0];
        let currentSum=nums[0];
        for(let i=1;i<nums.length;i++){
            currentSum=Math.max(currentSum+nums[i],nums[i]);
            maxSum=Math.max(currentSum,maxSum)
        }
    return maxSum  
};