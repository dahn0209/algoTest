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
