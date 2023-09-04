"""

You are given an integer array heights representing the heights of buildings, some bricks, and some ladders.

You start your journey from building 0 and move to the next building by possibly using bricks or ladders.

While moving from building i to building i+1 (0-indexed),

If the current building's height is greater than or equal to the next building's height, you do not need a ladder or bricks.
If the current building's height is less than the next building's height, you can either use one ladder or (h[i+1] - h[i]) bricks.
Return the furthest building index (0-indexed) you can reach if you use the given ladders and bricks optimally.

 

Example 1:


Input: heights = [4,2,7,6,9,14,12], bricks = 5, ladders = 1
Output: 4
Explanation: Starting at building 0, you can follow these steps:
- Go to building 1 without using ladders nor bricks since 4 >= 2.
- Go to building 2 using 5 bricks. You must use either bricks or ladders because 2 < 7.
- Go to building 3 without using ladders nor bricks since 7 >= 6.
- Go to building 4 using your only ladder. You must use either bricks or ladders because 6 < 9.
It is impossible to go beyond building 4 because you do not have any more bricks or ladders.

Example 2:

Input: heights = [4,12,2,7,3,18,20,3,19], bricks = 10, ladders = 2
Output: 7
Example 3:

Input: heights = [14,3,19,3], bricks = 17, ladders = 0
Output: 3


                    b: 5
                    l: 2
              /             \      [3,5,...,]
           b: 3            b: 5
           l: 2            l: 1
         /       \       /      \
      b:1                     b: 0
      l: 0                    l: 0
      

Constraints:

1 <= heights.length <= 10^5
1 <= heights[i] <= 10^6
0 <= bricks <= 10^9
0 <= ladders <= heights.length


Approach 1 Recusrison

Base Conditions

1. if height[i] >= height[i+1]:
        make a jump without the use of bricks or a ladder
        1 + helper(bricks,ladders)
        
2. if bricks == 0 and ladders == 0 and height[i+1] >= height[i]
    exit 
index = 0 
3. Using a ladder
        if ladders > 0
            var1 = 1 + helper(bricks, ladders - 1)
            
4.  using bricks
          [2, 7]
          diff = height[i+1] - height[i]
          if bricks > diff
            bricks -= diff
            var2 = 1 + helper(bricks, ladders)
              
find maximum(var1, var2)




Approach 2

Use ladder where the diff in the height is very large i.e use ladder for larger jumps
use some kind of data structure to store diff in height, to get the maximum every time - max heap

[2, 15], bricks = 13, ladders = 2
i   i+1   = 13


Algorithm
1. calculate the diff in height
2. if the diff < 0 continue else store diff in height in max heap
3. We start with the ladder and use all ladders at initial
the length of heap > ladders # use bricks as the ladders reaches 0
top = top of the max heap
bricks -= top



[4,2,7,8,20], bricks = 10, ladders = 1
       i i+1
heap([5])  use bricks 
heap([5, 1]) use brick bricks = 9
diff 12
top = 5 
5 bricks
12 - ladder
heap([5, 1]) use ladder
"""

import heapq
def jumpBuild(height, bricks, ladders):
  n = len(height)
  max_heap = []
  for i in range(0, n - 1): # iterate over the height array starting with 0 till length - 1 element
    diff = height[i+1] - height[i]
    if diff < 0:
      continue
    heapq.heappush(max_heap, diff)
    if len(max_heap) > ladders:
      #use brick
      top = heapq.heappop(max_heap)
      bricks -= top


    #bricks = 0 and ladder ==0 but height[i] > height[i+1]
      
    if bricks <0:
      return i
  return n - 1


heights = [2,7,9,12]
bricks = 5
ladders = 1


print(jumpBuild(heights, bricks, ladders))

    