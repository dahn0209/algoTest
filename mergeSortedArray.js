var merge = function(nums1, m, nums2, n) {
    
    nums1.splice(m,n);
    for(let eachNum of nums2){
        nums1.push(eachNum)
    }
    nums1.sort((a,b)=>a-b)
};