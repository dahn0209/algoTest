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
 * Complete the 'heapsort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 * 
 * 1.Heapify.    time:O(N). 
 * 
 *          parent(n).           children(m)
 * idx          0                   1,2
 *              1                   3,4
 *              2                   5,6
 *              3                   7,8
 * 
 *          2n+1,2n+2
 *          --------->
 *
 * 
 *                      [4, 15, 16, 50, 8, 23, 42, 108]
 *                                               <- i
 *                  unsorted                                maxheap--->parent greater than child
 *                                  to
 *  
 *                      [108, 50, 42, 15, 8, 23, 16, 4]
 * 
 * -iterate backwards through arr
 *      -call bubbledown at each index b/c it's unsorted 
 * -
 * 
 * 
 * 
 * 2.sort the array aka sortify.  time:O(N log(N))
 * 
 * 
 *              [108, 50, 42, 15, 8, 23, 16, 4]
 * 
 *                                        w
 * 
 *      maxheap                                 sorted array
 * 
 * -wall interates backwards through array
 *       -swap 0th index with wall
 *       -call bubble down (arr,0 wall)
 *       - wall--
 * 
 * 
 */
const getChildIndex=(arr,parentIndex,boundary)=>{
    let childIndex1=2*parentIndex+1;
    let childIndex2=2*parentIndex+2;
    
    if(childIndex1>=boundary){///if both childIndex1 and childIndex2 out of bound
        return childIndex1;
    }else if(childIndex2>=boundary){ ///this is out bound but childindex1 is inbound
        return childIndex1
    }else if(arr[childIndex1]>arr[childIndex2]){///if both inbound 
        return childIndex1
    }else{
        return childIndex2
    }
}

const swap=(arr,i1,i2)=>{
    [arr[i1],arr[i2]]=[arr[i2],arr[i1]]
}

const bubbleDown=(arr,parentIndex,boundary)=>{
    let childIndex=getChildIndex(arr,parentIndex,boundary)
    
    while(childIndex<boundary && arr[parentIndex]<arr[childIndex]){
        swap(arr,parentIndex,childIndex);
        parentIndex=childIndex;
        childIndex=getChildIndex(arr,parentIndex,boundary)
    }
}

const heapsort=(arr)=> {
    // Write your code here
    for(let i=arr.length-1;i>=0;i--){
        bubbleDown(arr,i,arr.length)
    }
    
    for(let wall=arr.length-1;wall>=0;wall--){
        swap(arr,0,wall);
        bubbleDown(arr,0,wall);
        
    }
    return arr
}