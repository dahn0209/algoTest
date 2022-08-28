var containsNearbyDuplicate = function(nums, k) {

    let numsMap=new Map();

    for(let i=0;i<nums.length;i++){
        let num=nums[i];

        if(numsMap.has(num)&& i-numsMap.get(num)<=k){
            return true
        }else{
            numsMap.set(num,i)
        }
    }
    return false
};


var containsNearbyDuplicate = function(nums, k) {

    let numsMap=new Map();

    for(let i=0;i<nums.length;i++){
        let num=nums[i];

        if(numsMap.has(num)){
            const j=numsMap.get(num);
            if(Math.abs(j-i)<=k){
                return true
            }
        }

        numsMap.set(num,i)
    }
    return false
};
