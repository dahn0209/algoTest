var sortedSquares = function(nums) {
    let result=[];
    for(let eachNum of nums){
        let numSquared=eachNum**2;
        result.push(numSquared)
    }
    result.sort((a,b)=>a-b);
    return result
};


var sortedSquares = function(nums) {
  	let sortedSqaure=[...nums];
	let smallValIdx=0;
	let largeValIdx=nums.length-1
	for(let i=nums.length-1;i>=0;i--){
		let smallerVal=nums[smallValIdx];
		let largerVal=nums[largeValIdx];
		if(Math.abs(smallerVal)>Math.abs(largerVal)){
			sortedSqaure[i]=smallerVal**2;
			smallValIdx++;
		}
		 else{
		  sortedSqaure[i]=largerVal**2;
		  largeValIdx--;
		}
	}
  return sortedSqaure
};
