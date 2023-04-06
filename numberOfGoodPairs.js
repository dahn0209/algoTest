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