var fourSum = function(nums, target) {

    let result=[]
    if(nums.length<4) return result

    nums.sort((a,b)=>a-b);

    for(let i=0;i<nums.length-3;i++){
        //skip the same numbers
        if (nums[i] === nums[i - 1]) continue

        for (let j = i + 1; j < nums.length - 2; j++) {
            //skip the same numbers
            if (j > i + 1 && nums[j] == nums[j - 1]) continue

            let k=j+1;
            let l=nums.length-1
            while(k<l){
                const sum = nums[i] + nums[j] + nums[k] + nums[l]

          if (sum === target) {
            result.push([nums[i], nums[j], nums[k], nums[l]])
          }

          if (sum <= target) {
            k ++
            while (nums[k] === nums[k - 1]) {
              k ++
            }
          }

          if (sum >= target) {
            l --
            while (nums[l] === nums[l + 1]) {
              l --
            }
          }
        }
      }
            }


  return result

}
