var isAnagram = function(s, t) {
    let sObj={};
    let tObj={}

    if(s.length!==t.length){
        return false
    }

    for(let eachS of s){
        console.log(eachS);
        if(eachS in sObj){
            sObj[eachS]+=1;
        }else{
            sObj[eachS]=1
        }
    }

    for(let eachT of t){
        console.log(eachT);
        if(eachT in sObj){
            sObj[eachT]-=1;
        }
    }
    let result=true;
    for(let key in sObj){
        let val=sObj[key]
        if(val!==0){
            result=false
        }
    }
    return result;
};

var searchRange = function(nums, target) {
    console.log('nums==>',nums,'target==>',target);
    if(nums.includes(target)===false){
        return [-1,-1]
    }
    console.log('deee==>', [nums.indexOf(target),nums.lastIndexOf(target)])
    return [nums.indexOf(target),nums.lastIndexOf(target)]
};


var findKthLargest = function(nums, k) {
    let sortNums=nums.sort((a,b)=>a-b);
    let kAdjust=sortNums.length-k;
    return sortNums[kAdjust]


};
