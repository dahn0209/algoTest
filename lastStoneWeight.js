var lastStoneWeight = function(stones) {

    if(stones.length===0){
        return 0
    }
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
        console.log(stones)
        if(stones.length===1){
            break
        }

    }
    console.log('result=>',stones)
    if(stones.length===0){
        return 0
    }else{
        return stones[0]
    }
};
