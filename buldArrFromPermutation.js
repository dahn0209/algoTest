var buildArray = function(nums) {

    let result=[]
    
    for(let i=0;i<nums.length;i++){
        let eachNum=nums[nums[i]];
        result.push(eachNum)
    }
    return(result)
};