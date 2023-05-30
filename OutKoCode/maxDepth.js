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

// Node class for a binary tree node
class TreeNode {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/*

1. Create State variable
2, Return State variable
3. Instantiate and invoke helper method
4. base Case(s)
5. Recursvie Cases(s)
 * Complete the 'preDFS' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts TreeNode root as parameter.
 * 
 * action 
 * left 
 * right
 * 
 * 
 * 
 * // Example Tree:
            // currrent, depth
//                4,0
//              /   \
//            2,1       5,1
//          /   \       \
//        1,2   3 ,2     7,2
//                      /   \
//                    6,3   8,3


 */

function preDFS(root) {
    // Write your code here
    ///create state variable 
    let result=[];
    //maxdepth;
    let maxDepth= -1;
    //Instantiate helper method
    function traverse(current,depth){
  
        ///base case
        if (current===null){
            return
        }

        console.log('current:',current.value)
        console.log('current depth:',depth)
        ////action----the action will change for pre post and in
        result.push(current.value);
        maxDepth=Math.max(maxDepth,depth)
        ///recursive cases
        ////left traversal
        traverse(current.left,depth+1)
        ////right traversal
        traverse(current.right,depth+1)
    }
    // Invoke helper method
    traverse(root,0)
    ///return state variable 
    console.log('result:',result);
    console.log('maxDepth:',maxDepth)
    return result
    
}