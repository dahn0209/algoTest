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
 * Complete the 'canReach' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER y1
 *  3. INTEGER x2
 *  4. INTEGER y2
 *                         x,y
 *                        [1,4]---->[5,9]
 * 
 *                          
 * 
 *          x+y,y                   [1,4]                       x,x+y
 * 
 * 
 *                  [5,4]                           [1,5]
 * 
 * 
 *         [9,4]            [5,9]           [6,5]           [1,6]
 * 
 * 
 *                            
 *  
 * 
 * 
 */

function canReach(x1, y1, x2, y2) {
    // Write your code here
    ////base case///
   if(x1>x2 ||y1>y2){
       return 'No'
   }
   ////if start x === end x
   if(x1===x2){
       ///if remainder is 0, return yes, else no
       if((y2-y1)%x1===0){
           return 'Yes'
       }else{
           return 'No'
       }
    }
       ////if start y === end y

    if(y1===y2){
        ///if remainder is 0, return yes, else no
       if((x2-x1)%y1===0){
            return 'Yes'
       }else{
           return 'No'
       }
       
    }
    ///recursive case for when ending x is greater than y//
    if(x2>y2){
        return canReach(x1, y1, x2%y2, y2) 
    }
    
    ///recursive case for when ending x is less than y//

    else if(x2<y2){
        return canReach(x1, y1, x2, y2%x2) 
    }
    
    else{
        return 'No'
    }

}