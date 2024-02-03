/*
Input:
MATRIX = { {0, 0, 1, 0}, {0, 0, 1, 0}, {0, 0, 0, 0}, {0, 0, 1, 0} }
Output: id = 2
Explanation: The person with ID 2 does not know anyone but everyone knows him

Input:
MATRIX = { {0, 0, 1, 0}, {0, 1, 0, 0}, {0, 0, 0, 0}, {0, 0, 1, 0} }
Output: No celebrity
Explanation: There is no celebrity.

{ {1, 0, 1, 0}
  {0, 1, 1, 0}
  {0, 0, 0, 0}
  {0, 0, 1, 1} }

[0,0,1,0]
{
0 -> 2
1 -> 2
2 ->
3 -> 2
}

Time: O(n^2)
Space: O(n^2)

if X doesn't know Y, then Y can't be a celebrity
if X knows Y then X can't be a celebrity

Efficient algo:
Time: O(n)
Space: O(1)
*/

function findCelebrityEfficient(m) {
    let row = 0
    for (let i = 1; i < m.length; i++) {
      if (m[row][i] === 0) {
        m[i][i] = 1
      }
      else {
        m[row][row] = 1
        row = i
      }
    }
  
    // Check column
    for (let i = 0; i < m.length; i++) {
      if (m[i][i] === 0) {
        let flag = true
        for (let j = 0; j < m.length; j++) {
          if (i != j && m[j][i] === 0) {
            flag = false
            break
          }
        }
  
        for (let j = 0; j < m.length; j++) {
          if (i != j && m[i][j] === 1) {
            flag = false
            break
          }
        }
  
        if (flag) {
          return i
        }
      }
    }
    return false
  }
  
  function findCelebrity(m) {
    adj = []
    for (let i = 0; i < m.length; i++) {
      adj[i] = []
    }
  
    // Construct adj
    for (let i = 0; i < m.length; i++) {
      for (let j = 0; j < m.length; j++) {
        if (m[i][j] === 1) {
          adj[i].push(j)
        }
      }
    }
  
    // Search for celeb
    for (let i = 0; i < m.length; i++) {
      if (adj[i].length === 0) {
        let flag = true
        for (let j = 0; j < m.length; j++) {
          if (i === j) continue
          if (!adj[j].includes(i)) {
            flag = false
            break
          }
        }
  
        if (flag) {
          return i
        }
      }
    }
    return false
  }
  
  m = [
    [0,0,1,0],
    [0,0,1,0],
    [0,0,0,0],
    [0,0,1,0]
  ]
  
  console.log(findCelebrityEfficient(m))