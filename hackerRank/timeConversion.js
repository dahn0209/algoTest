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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    
    if(s[s.length-2]==='P'){
        let hour=parseInt(s.substring(0,2))
        
        if(hour>0 && hour<12){
            hour=(hour+12).toString();
            return (hour+s.substring(2,s.length-2))  
        }
       return s.substring(0,s.length-2)
    }
    
    else if(s[s.length-2]==='A'){
         if(s[0]==='1' && s[1]==='2'){
            let hour=s.substring(0,2);
            hour='00'
            return (hour+s.substring(2,s.length-2))
        }
        
        return (s.substring(0,s.length-2))  
    }
    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
