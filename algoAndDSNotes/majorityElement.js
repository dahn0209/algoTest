var majorityElement = function(nums) {

    let obj={}

    for(let eachNum of nums){
        if(obj[eachNum]){
            obj[eachNum]++
        }else{
            obj[eachNum]=1
        }
    }
    for(let key in obj){
        if(obj[key]>(Math.floor(nums.length)/2)){
            return key
        }

    }
};
