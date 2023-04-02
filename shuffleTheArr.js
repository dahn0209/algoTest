/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let result=[]
    let firstHalf=nums.slice(0,n);
    let secondHalf=nums.slice(n);

    for(let i=0;i<n;i++){
        result.push(firstHalf[i]);
        result.push(secondHalf[i])
    }

    return result;
    
};