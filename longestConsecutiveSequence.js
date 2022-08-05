var longestConsecutive = function(nums) {

    if(nums===null ||nums.length===0){
        return 0
    }
    const set=new Set(nums);
    let max=0;

    for(let num of set){
        if(set.has(num-1)){
            continue
        }
        let currNum=num;
        let currMax=1;
        while(set.has(currNum+1)){
            currNum++;
            currMax++
        }
        max=Math.max(max,currMax)
    }
    return max
};


var longestConsecutive = function(nums) {

    let set=new Set(nums);
    let streak=0;

    for(let num of set){
        if(set.has(num-1)){
            continue
        }else{
            let currStreak=1;
            while(set.has(num+1)){
                currStreak++;
                num++
            }
            streak=Math.max(streak,currStreak)
        }
    }
    return streak
};
