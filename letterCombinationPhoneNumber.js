/*
Letter Combinations of a Phone Number

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

   1    2    3
       abc  def

   4    5    6
  ghi  jkl  mno
  
   7    8    9
  qrs  tuv  wxyz
   
   *    0    #
   +    _  shift


Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]


Example 2:

Input: digits = ""
Output: []


Example 3:

Input: digits = "2"
Output: ["a","b","c"]

*/


                // 2:abc    3:def

            //         a              

            // ac      ad    ae

            //////

          
/////base case 
/////if no digits---> return [];

////create result arr;
///create arr

////create obj map of phone numer//

////helperFunction(str, idx )  with str to push in arr, and index of digits parameter
    //if idx num goes over the lengt of digits, 
          ////push the str values in arr
          ////stop the loop

    
    ////create variable to acess the vales of obj map and loop through each letter in value 
    ////for in loop to acess each letter in the value of map;
    /////call helper function to add each letter to the str, increment       idx by 1


 ///call initial heper funciotn with paramenter of empty str and index of 0

///return arr

/////       

/**
 * @param {string} digits
 * @return {string[]}
 
 */
var letterCombinations = function(digits) {
    ////base case  if empty string, then return empty array
    if(digits.length===0){
      return []
    }
  
    ///create phone map from 2-9//
    const map={
      '2':'abc',
      '3':'def',
      '4':'ghi',
      '5':'jkl',
      '6':'mno',
      '7':'pqrs',
      '8':'tuv',
      '9':'wxyz',
    }
  
    ///create result arr
    const result=[]
  
    ///helper function with str val to push to arr and the idx of digits
    const helperFunction=(str,idx)=>{
      if(idx>digits.length-1){
        ////push str into result
        result.push(str);
        //stop look
        return
      }
      //// access value in map obj that correspond to each number in digits///
      const letters=map[digits[idx]];
      ///for of loop to loop through each letter of the letters
      for(const eachLetter of letters){
        /////call the helper funciton
            ///add eachletter to str, increment idx by 1
        helperFunction(str+eachLetter,idx+1);
      } 
    }
    helperFunction("",0)  ////call initial helper functoin starting with empty string and index 0
  
    return result;
      
  };
  
  console.log(letterCombinations(''))