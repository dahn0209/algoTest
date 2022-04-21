///O(nLog(N))

function mergeInterval(intervalArr){
    ///sort in ascending order///
        intervalArr.sort((a,b)=>a[0]-b[0]);
    ///result holds the first time solt of interval///
    let result=[intervalArr[0]]
    for(let interval of intervalArr){
        ///end of 1st interval which is inside result//
        let e1=result[result.length-1][1];
        ////start of 2 interval
        let s2=interval[0];
        ////end of 2 interval
        let e2=interval[1];
//if e1>=2, we need to merge by getting max of e1 or e2//
        if(e1>=s2){
            result[result.length-1][1]=Math.max(e1,e2)
        }else{
/////we push the interval where s2 and e2 is inside the result//
            result.push(interval)
        }
    }
   return result
}

var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
    return mergeInterval(intervals)

};

///O(N)
var insert = function(intervals, newInterval) {
    let size=intervals.lengthl;
    let index=0;
    let result=[];

    while(index<size&&intervals[index][1]<newInterval[0]){
        result.push(intervals[index]);
        index++;
    }

    while(index<size&&intervals[index][0]<=newInterval[1]){
        newInterval[0]=Math.min(newInterval[0],intervals[index][0]);
        newInterval[1]=Math.max(newInterval[1],intervals[index][1]);
        index++;
    }

    result.push(newInterval)

    while(index<size){
        result.push(intervals[index])
        index++
    }
    return result
};
