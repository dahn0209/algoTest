/*
Capital Permutations
Given a string str of lowercase alphabetical characters, return the set of all permutations of those characters in upper AND lowercase.

Advanced
Solve the same problem, except now you may have number characters in your string (which don't have a lowercase or uppercase, but should still be included in your result) and capital letters, that need to be lowercased.

Input: str (String)
Output: [Str] (Array of Strings)


Input: "A1d3"
Output: ["A1D3", "a1D3", "A1d3", "a1d3"]

Size of string? Reasonable and can fit in memory
Time or space constraints?

                                ""
                  "A"                            "a"
                  "A1"                           "a1"
          "A1D"          "A1d"          "a1D"            "a1d"
          "A1D3"         "A1d3"         "a1D3"           "a1d3"

function capitalPermutations(str){
  # initiate vars
  result = []

  function helper(index, s) {
    // base case(s)
    if (index === str.length) {
      result.push(s)
      return
    }

    // recursive case(s)
    // Numbers
    if (!isNaN(str[index])){
      helper(s + str[index], index + 1))
    }
    // Uppercase
    else if (str[index] == str[index].toUpperCase) {
      helper(s + str[index].toLowerCase(), index + 1)
      helper(s + str[index], index + 1)
    }
    // Lowercase (everything else)
    else {
      helper(s + str[index].toUpperCase(), index + 1)
      helper(s + str[index], index + 1)
    }
  }

  helper(0, "")
  return result
}
  
*/

function capitalPermutations(str){
    // initiate vars
    result = []
  
    function helper(s, index) {
      // base case(s)
      if (index === str.length) {
        result.push(s)
        return
      }
  
      // recursive case(s)
      // Numbers
      if (!isNaN(str[index])) {
        helper(s + str[index], index + 1)
      }
      // Uppercase
      else if (str[index] == str[index].toUpperCase()) {
        helper(s + str[index].toLowerCase(), index + 1)
        helper(s + str[index], index + 1)
      }
      // Lowercase (everything else)
      else {
        helper(s + str[index].toUpperCase(), index + 1)
        helper(s + str[index], index + 1)
      }
    }
  
    helper("", 0)
    return result
  }
  
  console.log(capitalPermutations("A1d3A1d3A1d3"))
  
  
  /*
  American Football Score
  In a simplified game of American football, teams score points by either achieving a touchdown (7 points) or a field goal (3 points).
  
  Given the score for a single team, please return how many different permutations of touchdowns and/or field goals exist in order to arrive at that score.
  
  Input: Integer
  Output: Integer
  Examples
  Input:  10
  Output: 2
  
  Explanation: For a score of 10, the output would be 2. The 2 ways to arrive at
  this score is to:
  
  1) Score a field goal (3 points) and then touchdown (7 points)
  2) Score a touchdown (7 points) and then field goal (3 points)
  
  
  Input: 21
  Output: 2
  
  Explanation: For a score of 21, the output would be 2. The 2 ways to arrive at
  this score is to:
  
  1) Score 7 field goals (3 * 7 points)
  2) Score 3 touchdowns (7 * 3 points)
  
  
  Input:  16
  Output: 4
  
  Explanation: For a score of 16, the output would be 4. The 4 ways to arrive at
  this score is to:
  
  1) Score 1 touchdown (7 points) and 3 field goals (3 * 3 points)
  2) Score 1 field goal (3 points), then 1 touchdown (7 points), and then 2 field goals (2 * 3 points)
  3) Score 2 field goals (2 * 3 points), then 1 touchdown (7 points), and lastly 1 field goal (3 points)
  4) Score 3 field goals (3 * 3 points) and then 1 touchdown (7 points)
  
  */