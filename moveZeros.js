//does i equal 0?
// [0,1,0,3,12]
//        i

////lastNonZeroIdx=0 ////increment nonzero indexes

var moveZeroes = function(nums) {
    let lastNonZeroIdx=0;

    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            nums[lastNonZeroIdx]=nums[i] ///i=1; lastNonZeroIdx=0   [0,1,0,3,12]-->[1,1,0,3,12] --->lastNonZeroIdx=1
                                         /// i=3  lastNonZeroIdx=1   [1,1,0,3,12]--->[1,3,0,3,12]---->lastNonZeroIdx=2
                                        /// i=4  lastNonZeroIdx=2   [1,3,0,3,12]---->[1,3,12,3,12]lastNonZeroIdx=3
            lastNonZeroIdx++
        }
    }
    for(let i=lastNonZeroIdx;i<nums.length;i++){ //lastNonZeroIdx=3 ---->i=3
        nums[i]=0;
    }
};
