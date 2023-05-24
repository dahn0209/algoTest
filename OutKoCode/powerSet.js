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
 * Complete the 'powerset' function below.
 *
 * 
 * Helper Method Recursion
 * 
 * 
 * 1. state variables
 * 2. Return State variabels
 * 3. Instantiate and invoke helper method
 * 4. Base case(s)
 * 5. Recursive case(s)
 * 
 * 
 * ""----->[""];
 * "a"---->["",a];
 * "ab"---->["",a,b, ab];
 * "abc"---->["",a,b, ab,c,ac,bc,abc]
 * - each output used in following output
 * 
 *               don't add                 " "                add
 *                  /                                               \
 *                 ""                                               a
 *          /               \                                 /            \
 *         ""                b                               a              ab    
 *   /           \.      /        \                     /       \         /     \
 * ""           c       b         bc                   a        ac       ab      abc 
 * res=["",c,b...]    
 * 
 * time: o(2**N);    N=input length
 * space:O(2**N)    

 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING word as parameter.
 * 
 * 
 * 1. create state variables
 * 2. Return state variables 
 * 3. Instanitate and invole helper metho 
 * 4. base cases
 * 5. recursive cases
 * 
 * 
 */

const powerset=(word)=> {
    // Write your code here
    const result=[];  ////create state variable
    
    const findCombos=(build,depth)=>{  //instantiate helper method
        if(depth===word.length){  ///base case
            result.push(build);
            return;
        }
        
           ////left
        findCombos(build, depth+1);///recursive case
    
    ////right///
        findCombos(build+word[depth],depth+1);///recursive case
    
   
        
    }
 

     findCombos("",0);     ///invole helper method
    return result;///return variable
    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const word = readLine();

    const result = powerset(word).sort();

    ws.write(result.join('\n') + '\n');

    ws.end();
}