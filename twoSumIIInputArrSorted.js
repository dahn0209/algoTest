var twoSum = function(numbers, target) {
    let left=0;
    let right=numbers.length-1;
    while(left<right){
        let sum=numbers[left]+numbers[right];
        if(sum<target){
            left++;
        }else if(sum>target){
            right--
        }else{
            return [left+1,right+1]
        }
    }
};

var twoSum = function(numbers, target) {
    let left=0;
    let right=numbers.length-1;
    ////change left<right to left!=right will improve the time complexity by alot
    while(left!=right){
        let sum=numbers[left]+numbers[right];
        if(sum<target){
            left++;
        }else if(sum>target){
            right--
        }else{
            return [left+1,right+1]
        }
    }
};


 */
var twoSum = function(nums, target) {

    let newNum=[...nums]
    let sortedNums=newNum.sort((a,b)=>a-b);

    let left=0;
    let right=sortedNums.length-1

    while(left<right){

       if((sortedNums[left]+sortedNums[right])===target){
           return([nums.indexOf(sortedNums[left]),nums.lastIndexOf(sortedNums[right])]);
       }

        if((sortedNums[left]+sortedNums[right])<target) {
            left++;
        }

        if((sortedNums[left]+sortedNums[right])>target) {
            right--;
        }
    }
};



/////hashmap////
var twoSum = function(nums, target) {
    let map={}

    for(let i=0;i<nums.length;i++){
        let val=nums[i];
        let pair=target-val;
        console.log('val=>',val,'pair=>',pair);
        if(map[pair]!==undefined){
            console.log('[map[pair],i]=>',[map[pair],i])
            return [map[pair],i]
        }else{
            map[val]=i
        }
    }


};
