var intersection = function(nums1, nums2) {
    
    let setNums1=[...new Set(nums1)];
    let setNums2=[...new Set(nums2)]
    let result=[];
    
    setNums1.forEach((e)=>{
       if(setNums2.includes(e)){
           result.push(e)
       }
    })
    
    return result
    
};

var intersection = function(nums1, nums2) {
    
    let setNums1=nums1.filter((c, index) => {
    return nums1.indexOf(c) === index;
    });
    
    let setNums2=nums2.filter((c, index) => {
    return nums2.indexOf(c) === index;
    });
        
    let result=[];
    
    setNums1.forEach((e)=>{
       if(setNums2.includes(e)){
           result.push(e)
       }
    })
    
    return result
    
};




////best result/////

var intersection = function(nums1, nums2) {

        
    let result=[];
    
    nums1.forEach((e)=>{
       if(nums2.includes(e)&&!result.includes(e)){
           result.push(e)
       }
    })
    
   return result   
};