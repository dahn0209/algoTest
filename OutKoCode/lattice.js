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
 * Complete the 'latticePaths' function below.
 *--recursive tree----
 * 
 *            down    row, col (0,0).        right
 *                            /.    \
 *                        /             \
 *                      /                   \
 *                    (1,0)                (0,1)
 *                   /.    \               /.    \
 *                 /         \            /.      \
 *               /           \           /         \
 *             (2,0)         (1,1)      (1,1)     (0,2)
 *             /  \
 * 
 *            /    \
 * 
 *           /       \
 *        (3,0)     (2,1)
 *                 /      \
 *               /         \
 *              /           \
 *            (3,1)         (2,2)
 * 
 * 
 * 
 * different approach. -bottom approach with pure recursion
 * 
 *              down   row, col (2,2).        right
 *                            /.    \
 *                        /             \
 *                      /                   \
 *                    (2,1)                (1,2)
 *                   /.    \               /.    \
 *                 /         \            /.      \
 *               /           \           /         \
 *             (2,0)         (1,1)      (1,1)     (0,2)
 *             /  \
 * 
 *            /    \
 * 
 *           /       \
 *        (2,-1)     (1,0)
 *                 /      \
 *               /         \
 *              /           \
 *            (1,-1)         (0,0)
 * 
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER m
 *  2. INTEGER n
 */

function latticePaths(row, col) {
    // Write your code here
    /////base casees there are two
    if(row<0 || col<0){
        return 0
    }
    ///reached top left corner
    if(row===0&&col===0){
        return 1
    }
    
    ///two recursive case because left and up
    let up= latticePaths(row-1,col)
    let left=latticePaths(row,col-1)
    
    
    return up+left

}