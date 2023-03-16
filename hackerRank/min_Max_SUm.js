'use strict';

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    
    arr.sort((a,b)=>a-b)
    let least=(arr.slice(0,arr.length-1))
    let most=(arr.slice(1,arr.length));
    let leastSum=0;
    let mostSum=0;

    for(let i=0;i<4;i++){   
        leastSum+=least[i];
        mostSum+=most[i]   
    }
    
    console.log(leastSum,mostSum);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
