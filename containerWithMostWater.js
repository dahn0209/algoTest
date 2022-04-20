var maxArea = function(height) {
    //let max be zero
    let max=0;
    ///have left and right pointer on opposite ends//
    let left=0;
    let right=height.length-1;
    ///while loop///
    while(left<right){
        // console.log('left=>',left,'right=>',right)
        let currentArea=Math.min(height[left],height[right])*(right-left);
        // console.log('currentArea==>',currentArea)
        max=Math.max(max,currentArea);
        // console.log('max=>Loop=>',max)
        //determine which pointer to move//
        if(height[left]<height[right]){
            // console.log('yes Great')
            left ++;
        }else{
            // console.log('not!')
            right--;
        }   
    }
    // console.log('result=>',max)
    return max
};