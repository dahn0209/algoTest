var findMedianSortedArrays = function(nums1, nums2) {
    // console.log('nums1=>',nums1,'nums2=>',nums2)
    let newArr=[...nums1,...nums2];
    // console.log('newArr=>',newArr);
    newArr.sort((a,b)=>a-b);
    // console.log('newArrSorted=>',newArr);
    if(newArr.length%2===1){
        let medianIdx=(newArr.length-1)/2
        // console.log('medianIdx=>',medianIdx)
        return newArr[medianIdx]
    }
    else if(newArr.length%2===0){
        let firstIdx=Math.floor((newArr.length-1)/2)/////10
        let secondIdx=newArr.length/2;/////11
        let medianResult=(newArr[firstIdx]+newArr[secondIdx])/2
        // console.log('medianResult=>',medianResult)
        return medianResult
     }
};
