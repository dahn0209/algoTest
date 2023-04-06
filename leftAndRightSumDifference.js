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

var leftRigthDifference = function(nums) {

    let leftSum=[0];
    let rightSum=[0];

    for(let i=0;i<nums.length;i++){
  
        let newSum=leftSum[i]+nums[i];
        leftSum.push(newSum) 
    }

    for(let j=nums.length-1;j>=0;j--){
   
        let newSum=nums[j]+rightSum[0];
        rightSum.unshift(newSum);
    }

    newLeftSum=leftSum.slice(0,nums.length);
    newRightSum=rightSum.slice(-nums.length);
    let result=[]
    
    for(let i=0;i<nums.length;i++){

        let newVal=Math.abs(newLeftSum[i]-newRightSum[i]);
        result.push(newVal)
    }
    return(result)
};