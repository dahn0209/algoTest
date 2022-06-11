const revNums=(nums,start,end)=>{
    while(start<end){
        [nums[start],nums[end]]=[nums[end],nums[start]];
        start++;
        end--;
    }
}



var rotate = function(nums, k) {
    ///if k is larger than length of nums it will keep cycling
    k=k%nums.length;
    nums.reverse()
    revNums(nums,0,k-1);
    revNums(nums,k,nums.length-1)
};
