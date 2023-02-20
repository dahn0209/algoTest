var intersect = function(nums1, nums2) {

    ////hash map for nums 1;
    let obj1={};
    let result=[];
    ///make hashmap for nums1
    for(let eachNums of nums1){
        if(!(obj1[eachNums])){
            obj1[eachNums]=1
        }else{
            obj1[eachNums]++
        }
    }
    ///lop through nums2 and see if hashmap has count of value
    for(let eachNum of nums2){
        if(obj1[eachNum]){
            result.push(eachNum)
            obj1[eachNum]-=1;
        }
    }
    return(result)
    
};


var intersect = function(nums1, nums2) {

    ////hash map for nums 1;
    let obj1={};
    let result=[];
    ///make hashmap for nums1
    for(let eachNums of nums1){
        if(!(obj1[eachNums])){
            obj1[eachNums]=1
        }else{
            obj1[eachNums]++
        }
    }
    ///lop through nums2 and see if hashmap has count of value
    for(let eachNum of nums2){
        if(obj1[eachNum]>0){
        result.push(eachNum);
        obj1[eachNum]--;
        }
    }
    return(result)
    
};