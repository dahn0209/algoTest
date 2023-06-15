'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'minimumWindowSubstring' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING fullString
 *  2. STRING chars
 * 
 * 
 *  
 * "ADOBECODEBANC", "ABC"
 * 
 *  0 1 2 3 4 5 6 7 8 9  10 11 12
 * "A D O B E C O D E B  A  N  C", "ABC"
 *  i
 *                              j
 * 
 * 
 *                                  +i                                      +j
 *                                                  0,12
 * 
 *                              1,12                                        0,11
 *                      
 *                      2,12            1,11                        1,11              0,10
 * 
 * 
 * 
 *   0 1 2 3 4 5 6 7 8 9  10 11 12
 * "A D O B E C O D E B  A  N  C", "ABC"           counts={ A:1,
 *                                                          B:1,
 *                                                          C:1
 *                                                          }
 *                                                 massing chars=3
 *  ---->
 *  L
 *  R
 *            
 * Hunting Phase(R)  -seek to fulfill condition                           Catchup Phase(L)0 minimise on wondow
 * 
 * -while R is less input length                                          -while missing chars===0;  
 *      -if missing chars >0                                                   - if current L-R range range <result range
 *          -if R char in counts                                                    -update Result
 *              -decremtn counts R[char]                                       - If L char in counts 
 *              - if counts [R chars]>0                                             -increment counts[L char]
 *                  - decrement missing chars                                       -if  counts[L char]>0
 * -Catchup Phase                                                                       -incremtn missingChar
 * -R++                                                                        -left++
 * 
 * 
 *                   
 */



function minimumWindowSubstring(word, target) {
    // Write your code here
    
    let left=0;
    let right=0;
    let result=[0,Infinity];
    
    //hash//
    const counts={};
    let missingChars=target.length;
    
    for(let i=0;i<target.length;i++){
        let char=target[i];
        if(char in counts){
            counts[char]++;
        }else{
            counts[char]=1
        } 
    }    
    
    while(right<word.length){
        if(missingChars>0){
               ///hunting phase
            let rChar=word[right];
            if(rChar in counts){
                if(counts[rChar]>0){
                    missingChars--;
                }
                                    counts[rChar]--;

            }
        }
        //catchup phase
        while(missingChars===0){
            if((right-left)<(result[1]-result[0])){
                result=[left,right]  
            }
            
            let lChar=word[left];
            if(lChar in counts){
                counts[lChar]++;
                if(counts[lChar]>0){
                    missingChars++;
                }
            }
            left++
        }
        
        right++
    }
    

    if( result[1]===Infinity){
        return ""
    }else{
       return word.slice(result[0],result[1]+1) 
    }
}