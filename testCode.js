


function solution(A) {
    let mark = new Set();
    let curLength = 0;
    let consecutiveSeq = 1;
    let allSeqLength = [];

    for(let i = 0; i < A.length; i++) {
        let num = A[i];
        if (!mark.has(num) && mark.size < 2) {
            curLength++;
            mark.add(num);
        } else if (!mark.has(num) && mark.size === 2) {
            // save previous seq
            allSeqLength.push(curLength);
            curLength = consecutiveSeq + 1;
            mark = new Set([A[i - 1], num]);
            consecutiveSeq = 1;
        } else {
            curLength++;
            consecutiveSeq = num === A[i - 1] ? consecutiveSeq + 1 : 1;
        }
    }

    allSeqLength.push(curLength);

    return Math.max(...allSeqLength);
}

console.log('dee=>',solution([1,2,3,2,3]))
