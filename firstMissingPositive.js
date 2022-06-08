var firstMissingPositive = function(nums) {
    let x=1
   nums.filter(x => x>=1)
       .sort((a,b)=>a-b)
       .map((val,i,arr)=>{
       // console.log('val=>',val,'i->',i,'arr=>',arr)
       if(x<arr[i]){
          // console.log(`${x}<${arr[i]}`,x<arr[i])
           return
       }else{
           // console.log('xBefore=>',x)
           x=arr[i]+1;
           // console.log('xAfter=>',x)
       }

   })
    return x
};


var firstMissingPositive = function(nums) {
      let n = nums.length;

        // Base case.
        let contains = 0;
        for (let i = 0; i < n; i++){
             if (nums[i] == 1) {
                contains++;
                break;
            }
        }

        if (contains === 0) return 1;

        // Replace negative numbers, zeros,
        // and numbers larger than n by 1s.
        // After this convertion nums will contain
        // only positive numbers.
        for (let i = 0; i < n; i++){
             if ((nums[i] <= 0) || (nums[i] > n)) nums[i] = 1;
        }


        // Use index as a hash key and number sign as a presence detector.
        // For example, if nums[1] is negative that means that number `1`
        // is present in the array.
        // If nums[2] is positive - number 2 is missing.
        for (let i = 0; i < n; i++) {
            let a = Math.abs(nums[i]);
            // If you meet number a in the array - change the sign of a-th element.
            // Be careful with duplicates : do it only once.
            if (a === n){
               nums[0] = - Math.abs(nums[0]);
            }

            else{
                nums[a] = - Math.abs(nums[a]);
            }

        }

        // Now the index of the first positive number
        // is equal to first missing positive.
        for (let i = 1; i < n; i++) {
            if (nums[i] > 0){
                 return i;
            }

        }

        if (nums[0] > 0){
             return n;
        }


        return n + 1;
    }


    var firstMissingPositive = function(nums) {
    for(let i=0;i<nums.length;i++){
        //if it is at whrere it should be'
        //and the place for ti is not occupied

        //swap current number with the number at its place
        const rightPosition=nums[i]-1
        if(nums[i]!==i+1 && rightPosition>=0 &&rightPosition<nums.length &&nums[i] !==nums[rightPosition]){
            const temp=nums[i];
            nums[i]=nums[rightPosition];
            nums[rightPosition]=temp
            i-=1;
        }
    }

    for(let i=0;i<i<nums.length;i++){
        if(nums[i]!==i+1){
            return i+1
        }
    }
    return nums.length+1

};

