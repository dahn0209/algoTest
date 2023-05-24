// Notes: 
// - input is from length of 0 to 1 million in length 
// - input is always a string 
// - input can consist of 
//     - letters (uppercase & lowercase) 
//     - numbers
//     - spaces
//     - punctuation
// - idea
//     - create every possible substring
//     - check for longest substring with no repeating characters
// - sliding window approach 


//  i
// abcabcbb
//     j
// 01234567

// frequency set = {
//     b
//     c
//     a
// }

//   i

//       j

// 100 + 99 + 98 + 97 + 96

// 100,000,000



//  i
// abcabcbb
//     j
// 01234567

// duplicates = 0

// freq = {
//     a: 1
//     b: 1
//     c: 1
// }

// result = 3


// - set result to 0
// - set i pointer to 0
// - set j pointer to 0
// - set duplicates to 0
// - create freq hash

// Hunting phase: 
// - while everything in freq is unique (duplicates is zero) 
//     - increment j pointer's character in freq
//         - if j pointer's character in freq is greater than 1, 
//           increment duplicates
//     - increment j pointer 

// Catchup phase: 
// - if everything in freq is not unique (duplicates > 0) 
//     - update result if current range difference (j - i) is greater than result
//     - decrement i-th character in freq count hash
//         - if count goes down to 1, decrement from duplicates) 

// return result

// */

const longestSubstring = (str) => {
    let result = 0;
    let i = 0;
    let j = 0;
    let duplicates = 0;
    let freq = {};

    while (i < str.length) {
        while (duplicates === 0 && i < str.length) {
            // hunting phase
            let char = str[j];
            if (char in freq) {
                freq[char] += 1;
                if (freq[char] > 1) {
                    duplicates += 1;
                }
            } else {
                freq[char] = 1;
            }
            // console.log("RESULT: ", result);
            // console.log("I: ", i);
            // console.log("J: ", j);
            // console.log("FREQ: ", freq);
            // console.log("DUPLICATES: ", duplicates);

            while (duplicates > 0 && i < str.length) {
                // console.log("RESULT: ", result);
                // console.log("I: ", i);
                // console.log("J: ", j);
                // console.log("FREQ: ", freq);
                // catchup phase
    
                result = Math.max(result, j - i);
                let char = str[i];
                freq[char] -= 1;
                if (freq[char] === 1) {
                    duplicates -= 1;
                }
                i++;
            }
            
            j++;
        }

        
    }

    result = Math.max(result, j - i);
    
    

    return result;
}

//                                i
console.log(longestSubstring("abcabcbb"));
console.log(longestSubstring("abcdefgh"));

//                                  j