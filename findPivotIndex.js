var pivotIndex = function(nums) {

    if(nums.length===1){
        return 0
    }

    let leftSum=null;
    let rightSum=0;
    let indexArr=[]

    for(let i=nums.length-1;i>=0;i--){

        for(let eachNum of nums.slice(i+1)){
            rightSum+=eachNum
        }

        for(let eachNum of nums.slice(0,i)){
            leftSum+=eachNum
        }


      if(rightSum!==leftSum){
          rightSum=null;
          leftSum=0;   
      }
    
      if(rightSum===leftSum 
      &&(rightSum!==null)&&(leftSum!==null)
      ){
        indexArr.push(i)

      }
    }
    if(indexArr.length===0){
        return(-1)
    }
    return(indexArr[indexArr.length-1])
};



///better time and space//

var pivotIndex = function(nums) {
    
    let sum=0;
    for(let eachNum of nums){
        sum+=eachNum
    }
    let leftSum=0;
    for(let i=0;i<nums.length;i++){

        console.log(`index:${i}; sums:${sum}; leftSum:${leftSum}; nums[i]:${nums[i]}; leftSum:${leftSum}`)
        console.log(`index:${i}; equation:${sum-leftSum-nums[i]}; leftSum:${leftSum}`)
        if(sum-leftSum-nums[i]===leftSum){
            return i
        }
        leftSum+=nums[i]
    }
    return -1
};