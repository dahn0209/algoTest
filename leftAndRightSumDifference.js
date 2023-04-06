var leftRigthDifference = function(nums) {

    let leftSum=[0];
    let rightSum=[0];

    for(let i=0;i<nums.length;i++){
        if(nums.length===leftSum.length){
            break
        }
        // leftSum[0]=0
        let newSum=leftSum[i]+nums[i];
        leftSum.push(newSum) 
    }

    for(let j=nums.length-1;j>=0;j--){
        if(nums.length===rightSum.length){
            break
        }
        let newSum=nums[j]+rightSum[0];
        rightSum.unshift(newSum);
    }
    let result=[]
    
    for(let i=0;i<nums.length;i++){

        let newVal=Math.abs(leftSum[i]-rightSum[i]);
        result.push(newVal)
    }
    return result    
};