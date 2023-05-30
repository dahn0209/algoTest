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
 * Complete the 'treeBFS' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts TreeNode root as parameter.
 * 
 * BFS=[4,2,5,1,3,7,6,8]        result array=[]
 * 
 * queue-> first in first out --escaltor conveyer belt 
 * 
 * 
 * current=
 * 
 * -set current to queue.dequeue;
 * -push current children to queue;
 * =push current value to result array
 *     
 */

function treeBFS(root) {
    // Write your code here
    const queue=[];
    const result=[]
    queue.push(root);
    console.log('queue:',queue);
    
    if(root===null){
        return result
    }
    
    while(queue.length>0){
        let current=queue.shift();
        
        
        //push current value to result array
        result.push(current.value)
        
        ///push current children to queue
        if(current.left!==null){
            queue.push(current.left);

        }
        
        if(current.right!==null){
            queue.push(current.right)
        }
    }
    
    console.log('result:',result)
    return result;
}