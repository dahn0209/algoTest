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
 */

function preDFS(root) {
    // Write your code here
    ///create state variable 
    let result=[];
    //Instantiate helper method
    function traverse(current){
        ///base case
        if (current===null){
            return
        }
        ////action
        result.push(current.value);
        ///recursive cases
        ////left traversal
        traverse(current.left)
        ////rigth traversal
        traverse(current.right)
    }
    // Invoke helper method
    traverse(root)
    ///return state variable 
    return result
    
    
}