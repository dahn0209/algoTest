 function clostVal(arr, closet){

    let res = arr[0];

    for(let i = 1; i < arr.length; i++){

        if (Math.abs(closet - res) >
            Math.abs(closet - arr[i]))
        {
            res = arr[i];
        }
    }


    return res;
}
var threeSumClosest = function(nums, target) {
    let result=[];

    let sortedNum=nums.sort((a,b)=>a-b);

    for(let i=0;i<sortedNum.length-2;i++){

        let left=i+1;
        let right=sortedNum.length-1;

        while(left<right && (i!==left)&& (i!==right)&&(right!==left)){
            let arraySum=sortedNum[i]+sortedNum[left]+sortedNum[right];

            if(arraySum===target){
					result.push(arraySum);
					left++;
					right--
			}
			if(arraySum<target){
					result.push(arraySum);
					left++
			}
			else if(arraySum>target){
					result.push(arraySum);
					right--
				}
        }
    }
    let closest=clostVal(result,target)

    return closest

};



var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>a-b)


    let ans=nums[0]+nums[1]+nums[2];
    for(let i=0;i<nums.length-2;i++){
        let start=i+1;
        let end=nums.length-1;
        while(start<end){
            let sum=nums[i]+nums[start]+nums[end];
            if(sum>target){
                end--
            }else{
                start++;
            }

            if(Math.abs(target-sum)<Math.abs(target-ans)){
                ans=sum
            }
        }

    }
    return ans

};
