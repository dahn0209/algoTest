var searchMatrix = function(matrix, target) {
    ////sorted list, then binary search///
    let rows=matrix.length;
    let columns=matrix[0].length;
    let left=0;
    let right=rows*columns-1;

    while(left<=right){
        let mid=Math.floor(left+(right-left));
        let midVal=matrix[Math.floor(right/columns)][right%columns];

        if(midVal===target){
            return true
        }
        if(target<midVal){
            right=mid-1;   
        }else{
            left=mid+1;
        }
    }
return false   
};