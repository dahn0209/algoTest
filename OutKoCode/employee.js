/*
Scenario: You are organizing a series of team-building activities for a group of employees. Each employee is identified by a unique number.

However, due to differing work styles and past conflicts, some employees do not work well together. 

Your task is to arrange the employees into a sequence for these activities while ensuring that incompatible pairs are not placed next to each other.

Task: Write a function that determines all possible sequences of employee arrangement where no incompatible pairs are adjacent.

Examples:

Simple Team:

Employees: [0, 1]
Incompatible Pairs: []
Possible Arrangements: [[0, 1], [1, 0]]
Larger Team:

Employees: [0, 1, 2]
Incompatible Pairs: []
Possible Arrangements: [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]]
Team with Conflicts:

Employees: [0, 1, 2]
Incompatible Pairs: [[0, 1]]
Possible Arrangements: [[0, 2, 1], [1, 2, 0]]
Note: When Incompatible Pairs = [[0, 1]], it means that employee 0 cannot be placed directly before or after employee 1 in the sequence.


Insight: If there is no incompatibility, we should produce all possible permutations.

Suggestion 1:
  Draw the decision tree, traverse the tree (DFS or BFS), the answers that we want are in the leaves.
  At each level of the tree, we assign one person, after n levels, we get to the leaves (n is the size of input)

Suggestion: Use recursion.
Base case: [] -> []
Base case: [1] -> [[1]]
[1, 2] -> [[1,2], [2,1]]

Employees:[]
F(path, secondParameter? )

Suggestion: backtracking is the algorithm that finds all possbile combinations.
            Brute-Force / Exhuastive search

"Always consider the brute force algorithm and talk about!"
*/

function EmployeesRtreate(employees, incompatibles) {
    let cur_sequence = [];
    let result = [];
  
    function IsCompatible(a, b) {
      for (let pair of incompatibles) {
        if (
          (pair[0] === a && pair[1] === b) ||
          (pair[0] === b && pair[1] === a)
        ) {
          return false;
        }
      }
      return true;
    }
  
    function dfs() {
      // Check for base case (It's the leaf!)
      if (cur_sequence.length == employees.length) {
        let deep_copy = [...cur_sequence];
        result.push(deep_copy);
        return;
      }
  
      for (let child of employees) {
        if (cur_sequence.includes(child)) {
          continue;
        }
  
        // Compatibility check:
        if (
          cur_sequence.length !== 0 &&
          !IsCompatible(child, cur_sequence[cur_sequence.length - 1])
        ) {
          continue;
        }
  
        // Adjust your auxiliary paramter
        cur_sequence.push(child);
  
        dfs(child);
  
        // Reset your auxiliary paramter
        cur_sequence.pop();
      }
    }
  
    dfs();
    return result;
  }
  
  let r;
  r = EmployeesRtreate([0, 1, 2], [[]]);
  console.log(r);
  
  r = EmployeesRtreate([0, 1, 2], [[0, 1]]);
  console.log(r);
  
  
  
  r = EmployeesRtreate([0, 1, 2, 4], [[0, 1], [1, 4]]);
  console.log(r);
  
  
  // Time complexity?
  // Equal to the number of nodes in the decision tree.
  // O(n!)
  
  // Backtracking = Brute-Force + pruning optimization
  // Or, it is DFS on the decision tree that is pruned early.