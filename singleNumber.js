var singleNumber = function(nums) {
    
    for(let i=0;i<nums.length;i++){
        if(nums.indexOf(nums[i])===nums.lastIndexOf(nums[i])){
            return (nums[i])
        }
    }    
};

var singleNumber = function(nums) {
    
    let obj={};
    
    for(let eachNum of nums){
        if(eachNum in obj){
            obj[eachNum]++;
        }else{
            obj[eachNum]=1
        }
    }
    for(let key in obj){
        if(obj[key]===1){
            return key
        }
    }
};