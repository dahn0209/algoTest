var runningSum = function(nums) {

    let left=1;
    let right=nums.length;

    while(left<right){

        let firstNum=nums[left-1];
        let sum=firstNum+nums[left];
        nums[left]=sum;
        firstNum=nums[left];
        left++;
    }

    return nums

};

var runningSum = function(nums) {

    for(let i=1;i<nums.length;i++){
        let firstNum=nums[i-1];
        let sum=firstNum+nums[i];
        nums[i]=sum;
        firstNum=nums[i];
    }

    return (nums)

};


var runningSum = function(nums) {

    for(let i=1;i<nums.length;i++){
        nums[i]+=nums[i-1]
    }

    return (nums)

};




var runningSum = function(nums) {

    let newNum=[...nums];

    for(let left=1;left<nums.length;left++){

        newNum[left]=newNum[left-1]+nums[left]
        
    }
    return newNum
};