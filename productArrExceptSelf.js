var productExceptSelf = function(nums) {
    ///make copy of nums
    let result=[]
    ///loop through productArr///
    let left=0;
    let right=nums.length
    while(left<right){
        let filterArr=nums.filter((eachNum,idx)=> idx!==left);;
        let product=1;
        for(let eachNum of filterArr){
            product=product*eachNum;
        }
        if(product===-0){
            product=0;
            result.push(product)
        }else{
            result.push(product)
        }
        left++;

    }
    return result
};

//  ////inuitive with division///
//   [-1,1,0,-3,3]
//   -3 different edge cases
//     -if more than 1 zero, then every input is zero;
//         ex. [1,2,0,5,7,0,9]--->[0,0,0,0,0,0,0]
//     -if 1 zero, filter out zero
//         ex. [-1,1,-3,3]-->product is 9  result:[0,0,9,0,0]

//     - if no zero, use division
//         ex.[1,2,3,4]   24/1=24 24/2=12 24/3=8 24/4=6  --> [24,12,8,6]

//     ///non-initituve///dynamic programing

//     left. [1,2,3,4]--->
//           [1,1,2,6]

//     right. [1,2,3,4]---->
//          [24,12,4,1]

//     resut-->[(1*24=24),(1*12=12),(2*4=8),(6*1=6) ]


var productExceptSelf = function(nums) {

    let left=[...nums];
    left[0]=1
    let right=[...nums];
    right[right.length-1]=1

    for(let i=0;i<nums.length;i++){
        left[i+1]=left[i]*nums[i]
    }

    for(let i=nums.length-1;i>=0;i--){
        right[i-1]=right[i]*nums[i]
    }

    for(let i=0;i<nums.length;i++){
        nums[i]=left[i]*right[i]
    }
    return nums

};
