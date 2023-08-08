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
 * Complete the 'find_all_paths' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. Vertex origin
 *  2. String destination
 * 
 * 
 * depth first search 
 * 
 * result=["ABCEFD"];
 * visited={}
 * 
 * recursive solution///
 *  
 *                                          current, path
 *                                                  A , [A]
 *                      
 *                                          B, [A,B]
 * 
 *                                      C, [A,B,C]
 * 
 *                                      E   [A,B,C,E]
 * 
 *                        H,[A,B,C,E,H]      F, [A,B,C,E,F]
 * 
 *                                           D, [A,B,C,E,F,D]
 * 
 *  
 * 
 */

/*
 * For your reference:
 *
 * Vertex {
 *   char id;
 *   edges[Vertex];
 * }
 *
 */

function find_all_paths(origin, destination) {
    
    const visited=new Set();
    const result=[]
 
    const traverse=(current,path)=>{
        ////base case//
        ///if visited has the current node
        if(visited.has(current)){
            //not a valid path to continue and so return
            return
        }
        ////if current.id is equal to destination
        if(current.id===destination){
            ///push path to result//action
            result.push(path.join(''))
            ///stop///
            return;
        }
        
        const edges=current.edges;
        //before traveling outwards
        ////add currrent node to visited Set
        visited.add(current);
        ///loop through edges
        for(let edge of edges){
            path.push(edge.id);
            traverse(edge,path);
            path.pop()    
        }
        
        visited.delete(current)
    }
    
    traverse(origin,[origin.id])
    
    result.sort()
    return result

}