function compactedArr(arr){

    let startIdx=0; ///this is starting index for comparsion. we will start from index 0;///
    
    for(let j=1;j<arr.length;j++){////for loop through arr starting from index j===1 to compare with startidx
        if(arr[startIdx]!==arr[j]){////if startIdx and j don't equal, then increment startidx by 1
            startIdx++;
            arr[startIdx]=arr[j]////arr at startIdx will change to value at arr at j
        }
    }
    // console.log(arr.slice(0,startIdx+1))
    return arr.slice(0,startIdx+1)////return array slice starting from index 0 to startIdx+1
}

compactedArr([1, 2, 6, 8, 8, 8, 9, 10, 10])