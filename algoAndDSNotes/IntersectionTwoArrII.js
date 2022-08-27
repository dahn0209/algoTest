var intersect = function(nums1, nums2) {

    let obj={};
    let result=[];

    ///make hashmap of nums1
    for(let eachNum of nums1){
        if(!obj[eachNum]){
            obj[eachNum]=1
        }else{
            obj[eachNum]++
        }
    }
    ///lopp through second array of nums and see if bashmap has a count of value//
    for(let eachNum of nums2){
        if(obj[eachNum]){
            result.push(eachNum)
            obj[eachNum]--;
        }
    }
    return result
};
