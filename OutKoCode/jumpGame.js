/*
  You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.



Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.


Constraints:

1 <= nums.length <= 10^4
0 <= nums[i] <= 10^5
*/

// pseudo code 

// make variable max for max distance 

// for loop incremet by 1 start at 0 index

//     if index > max----> return false b/c it is when it is 0 and thus cannot move 

//     change val of max variable with the maximums of either index plus value at nums[index] or initial max val


// if not zero, return true


function jump(nums){
    // make variable max for max distance 
    let max=0
    // for loop incremet by 1 start at 0 index
    for(let i=0;i<nums.length;i++){
      //     if index > max----> return false b/c it is when it is 0 and thus cannot move 
      if(i>max){
        return false
      }
  
      //     change val of max variable with the maximums of either index plus value at nums[index] or initial max val
    max=Math.max(nums[i]+i,max)
    }
  
  
    // if not zero, return true
    return true
    
  }
  
  console.log(jump([3,2,1,0,4]))