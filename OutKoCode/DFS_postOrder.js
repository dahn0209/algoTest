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
 * Complete the 'postDFS' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts TreeNode root as parameter.
 */

function postDFS(root) {
    // Write your code here
          // Write your code here
    ///create state variable 
    let result=[];
    //Instantiate helper method
    function traverse(current){
        ///base case
        if (current===null){
            return
        }
      
        ///recursive cases
        ////left traversal
        traverse(current.left)
        ////rigth traversal
        traverse(current.right)
          ////action----the action will change for pre post and in
        result.push(current.value);
    }
    // Invoke helper method
    traverse(root)
    ///return state variable 
    console.log('result:',result)
    return result  
}