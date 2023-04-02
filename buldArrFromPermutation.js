var buildArray = function(nums) {

    let result=[]
    
    for(let i=0;i<nums.length;i++){
        let eachNum=nums[nums[i]];
        result.push(eachNum)
    }
    return(result)
};


var buildArray = function(nums) {
    let newNums=[...nums]

    for(let i=0;i<newNums.length;i++){
        let eachNum=newNums[i];
        let newEachNum=newNums[eachNum];
        eachNum=newEachNum;
        nums[i]=eachNum;
    
    }
    return (nums)
};