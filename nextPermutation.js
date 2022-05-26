 //Find peak num
    //Find the next largest num to right of peak
    //flip peak = 1 and largest num to right of peak
    //reverse from peak to end of arr
var nextPermutation = function(nums) {
            //find the peak//
    let peak;
    for(let i=nums.length;i>=0;i--){

        if(i===0){
            peak=0;
        }
        if(nums[i]>nums[i-1]){
            peak=i;
            break
        }
    }
    //find largest number on right of peak//
    for(let j=nums.length-1;j>=0;j--){
        if(nums[j]>nums[peak-1]){
            let temp=nums[j];
            nums[j]=nums[peak-1];
            nums[peak-1]=temp;
            break
        }
    }
    //reverse from peak to end of arr
    let start=peak;
    let end=nums.length-1;
    while(start<end){
        let temp=nums[start];
        nums[start]=nums[end];
        nums[end]=temp;
        start++;
        end--
    }
    return nums
};
