function mergeInterval(intervalArr){
        intervalArr.sort((a,b)=>a[0]-b[0]);
    let result=[intervalArr[0]]
    for(let interval of intervalArr){
        let e1=result[result.length-1][1];
        let s2=interval[0];
        let e2=interval[1];

        if(e1>=s2){
            result[result.length-1][1]=Math.max(e1,e2)
        }else{
            result.push(interval)
        }
    }
   return result
}

var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
    return mergeInterval(intervals)

};
