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
 * Complete the 'bfs' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. Vertex origin
 */

/*
 * For your reference:
 *
 * Vertex {
 *   char id;
 *   edges[Vertex];
 * }
 *
 * 
 * result array
 * visited hashmap--->this makes it distinct from binary tree in order to prevent visting the same node again
 * 
 * current variable -current value
 * current=q.dequeue
 * 
 * -loop through current edges
 *      -if not vistied
 *          - enqueue edges
 *          -add edge to visited
 * -add current ID + result 
 */

function bfs(origin) {
    // Write your code here
      if(origin===null){
        return ""
    }
     const queue=[];
     const visited=[];
    let result="";
    queue.push(origin);
    visited.push(origin);
    
    while(queue.length>0){
        // * -set current to queue.dequeue;
        let current=queue.shift();
        let edges=current.edges;
        
        for(let i=0;i<edges.length;i++){
            let edge=edges[i];
            // if not vistied
            if(!visited.includes(edge)){
                queue.push(edge);
                visited.push(edge)
            }   
        }
        result+=(current.id)
    }
    
    return result;
    

}