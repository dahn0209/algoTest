var topKFrequent = function(nums, k) {

    let obj={};
    let result=[]

    for(let eachNums of nums){
        if(!obj[eachNums]){
            obj[eachNums]=1
        }else{
            obj[eachNums]+=1;
        }
    }
    let val=Object.entries(obj);
    val.sort(([,a],[,b])=>b-a)
    for(let i=0;i<k;i++){
        result.push(parseInt(val[i][0]))
    }

 return result
}


////opitimal solution///
var topKFrequent = function(nums, k) {
    ///loop up
    //{element:#seen}//
    //{1:3, 2:2, 3:1}

    let seen={};

    for(let num of nums){
        if(!seen[num]){
            seen[num]=1
        }else{
            seen[num]++
        }
    }
    //[[],[3],[2],[1]]
    const bucket=[];
    ///populates///
    for(let i=0;i<=nums.length;i++){
        bucket.push([])
    }

    for(let key in seen){
        let count=seen[key];
        bucket[count].push(key)
    }

    let result=[];
    for(let i=bucket.length-1;i>=0;i--){
        if(bucket[i].length===0){
            continue  ////skip [] in bucket
        }else{
           result=[...result,...bucket[i]]   //spread result with bucketVal
            ///spread would flatten the structure--->...
        }
    }
    return res.slice(0,k)

}
