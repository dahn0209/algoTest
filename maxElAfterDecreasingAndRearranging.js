var maximumElementAfterDecrementingAndRearranging = function(arr) {
    arr.sort((a,b)=>a-b)

    let res=1;

    for(let i=1;i<arr.length;i++){
        res+=arr[i]>res;
        //or//
        // if(arr[i]>res){
        //     res++;
        // }
    }
    return res
};
