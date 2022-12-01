
/////brute force way////

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











var findMedianSortedArrays = function(nums1, nums2) {
    
    let newArr=[];
    
    
    let point1=0;
    let point2=0;
    
    while(point1<nums1.length&&point2<nums2.length){
        if(nums1[point1]<=nums2[point2]){
            newArr.push(nums1[point1])
            point1++
        }else{
              newArr.push(nums2[point2])
              point2++
        }
    }
    
    while(point1<nums1.length){
        newArr.push(nums1[point1])
            point1++
    }
    
       while(point2<nums2.length){
        newArr.push(nums2[point2])
            point2++
    }

    if((newArr.length)%2!==0){
        
        let medianIdx=(newArr.length-1)/2;
        return newArr[medianIdx]
    }
    
       if((newArr.length)%2===0){
        
        let medianIdx=(newArr.length-1)/2;
        let floorMedianIdx=Math.floor(medianIdx);
        let roundMedianIdx=Math.round(medianIdx);
           
         return (newArr[floorMedianIdx]+newArr[roundMedianIdx])/2

    }
    
};


 var findMedianSortedArrays = function(nums1, nums2) {
    
    let newArr=[];
    let point1=0;
    let point2=0;
    
    while(point1<nums1.length&&point2<nums2.length){
        if(nums1[point1]<=nums2[point2]){
            newArr.push(nums1[point1])
            point1++
        }else{
              newArr.push(nums2[point2])
              point2++
        }
    }
    
    while(point1<nums1.length){
        newArr.push(nums1[point1])
            point1++
    }
    
    while(point2<nums2.length){
        newArr.push(nums2[point2])
            point2++
    }
    
     if((newArr.length)%2===0){
                 
        return (newArr[newArr.length / 2] + newArr[(newArr.length) / 2 - 1]) / 2;
    }
    
      let medianIdx=(newArr.length-1)/2;
        return newArr[medianIdx]
    
};