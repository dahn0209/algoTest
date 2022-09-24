var merge = function(nums1, m, nums2, n) {
    
    nums1.splice(m,n);
    for(let eachNum of nums2){
        nums1.push(eachNum)
    }
    nums1.sort((a,b)=>a-b)
};


var merge = function(nums1, m, nums2, n) {
    
   let first=m-1;
   let second= n-1
   let i=m+n-1

   while(second>=0){
        let firstVal=nums1[first];
        let secondVal=nums2[second];

        if(firstVal>secondVal){
            nums1[i]=firstVal
            i--;
            first--
        }else{
            nums1[i]=secondVal;
            i--;
            second--;
        }
   }
};