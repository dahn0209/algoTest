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
