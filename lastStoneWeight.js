var lastStoneWeight = function(stones) {

    if(stones.length===1){
        return stones[0]
    }
    for(let i=stones.length-1;i>=0;i--){
        stones.sort((a,b)=>a-b);
        let firstMax=stones.pop();
        let secondMax=stones.pop();
        if(firstMax!==secondMax){
            let newWeight=firstMax-secondMax;
            stones.push(Math.abs(newWeight))
        }
        if(stones.length===1){
            break
        }
    }
    if(stones.length===0){
        return 0
    }else{
        return stones[0]
    }
};




var lastStoneWeight = function(stones) {

    if(stones.length===0){
        return 0
    }
    if(stones.length===1){
        return stones[0]
    }



    for(let i=stones.length-1;i>=0;i--){
        let firstMax=Math.max(...stones)
        let firstMaxIdx=stones.indexOf(firstMax);
        stones.splice(firstMaxIdx,1);
        let secondMax=Math.max(...stones)
        let secondMaxIdx=stones.indexOf(secondMax);
        stones.splice(secondMaxIdx,1);
        if(firstMax!==secondMax){
            let newWeight=firstMax-secondMax;
            stones.push(Math.abs(newWeight))
        }
        if(stones.length===1){
            break
        }

    }

    if(stones.length===0){
        return 0
    }else{
        return stones[0]
    }
};


/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    const maxWeight = Math.max(...stones);
    const buckets = new Array(maxWeight + 1).fill(0);
    for (const weight of stones) {
        buckets[weight]++;
    }

    let biggestWeight = 0,
        currentWeight = maxWeight;
    while (currentWeight > 0) {
        if (buckets[currentWeight] === 0) {
            currentWeight--;
        } else if (biggestWeight === 0) {
            buckets[currentWeight] %= 2;
            if (buckets[currentWeight] === 1) {
                biggestWeight = currentWeight;
            }
            currentWeight--;
        } else {
            buckets[currentWeight]--;
            if (biggestWeight - currentWeight <= currentWeight) {
                buckets[biggestWeight - currentWeight]++;
                biggestWeight = 0;
            } else {
                biggestWeight -= currentWeight;
            }
        }
    }
    return biggestWeight;
};
