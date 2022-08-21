/**
 * @param {number[]} nums
 * @return {number[][]}


                                                        1,2,3

                    1,2,3                               2,1,3                               3,1,2

            1,2,3         1,3,2                 2,1,3         2,3,1                  3,1,2         3,2,1

 Result=[]
 */
var permute = function(nums) {
    ///global result////
    const result=[]
    ///dfs recursive//
    const dfs=(i,nums)=>{
        //base case//
        if(i===nums.length){
            result.push(nums.slice());
            return
        }
        ///dfs recursive case///
        for(let j=i;j<nums.length;j++){
            ///swapping variable//
            [nums[i],nums[j]]=[nums[j],nums[i]];
            dfs(i+1,nums);
             ///reswapping variable//
            [nums[i],nums[j]]=[nums[j],nums[i]];
        }
    }
        dfs(0,nums);
        return result
};
