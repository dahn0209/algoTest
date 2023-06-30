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
 * Complete the 'robotPaths' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 *                          ///
 *                              col-->
 *                              x-->
 *                            0 1
 *          row  y       0   [[0,0],
 *                       1    [0,0]
 *                           ]
 *
 *      
 *         row      col
 * matrix[  1   ][  0   ]
 * 
 * 
 * 
 * traversing
 * -nested loop
 * 
 *      for(row in matrix)
 *          for(item in row)
 * 
 * -recursion. 
 *       --DFS(Depth First search). ---path existence, all paths
 * 
 *       -BFS.  ---shortest path
 *      
 * 
 * 
 * boundary
 * 
 *                             col-->
 *                              x-->
 *                             0 1 2
 *          row  y       0   [[0,0,0],              row>=2;             matrix.length---->to get row
 *                       1    [0,0,0]               col>=3;             matrix[0].length--->to get col
 *                           ]
 * 
 * row<0
 * 
 * col<0
 * 
 * 
 *                            col-->
 *                              x-->
 *                            0 1
 *          row  y       0   [[0,0],
 *                       1    [0,0]
 *                           ]
 *
 * use DFS
 *                              row+1   row-1                                    col+1   col-1
 *                                                          row,col
 *                                                            0,0
 * 
 * 
 *                    1,0                       -1,0x                             0,1                 0,-1x
 * 
 * 
 *           2,0x  0,0x   1,1   1,-1x                                1,1    -1,1x    0,2x    0,0x  
 * 
 * recursive cases                          base cases
 * -up                                      -out of bounds
 * -down                                     -already visited
 * -left                                    -reached destination
 * -right
 */

function robotPaths(matrix) {
    // Write your code here
    let result=0;
    
    const traverse=(row,col)=>{
        ///base case//
        if(row<0||col<0||row>=matrix.length||col>=matrix[0].length){
            //out of bounce
            return;
        }
        if(matrix[row][col]===1){
            //already visited
            return;
        }
        
        if(row===matrix.length-1 && col===matrix[0].length-1){
            ///reached destination
            result++;
            return
        }
        
        matrix[row][col]=1;
    
        traverse(row+1,col);
        traverse(row-1,col);
        traverse(row,col+1);
        traverse(row,col-1);
    
        matrix[row][col]=0;
        
    }
  
    traverse(0,0);



    
    return result
    

}