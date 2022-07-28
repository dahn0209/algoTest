
/////exceeed time/////
var maxProfit = function(prices) {


    let left=0;
    let right=1;
    let differentProfitArr=[]

    while(left<prices.length && right<prices.length && left<right){
        let profit=prices[right]-prices[left];
        differentProfitArr.push(profit);
        right++
        if(right>prices.length-1){
            left++;
            right=left+1;
        }
    }

   if(Math.max(...differentProfitArr)<=0){
       return 0
   }

    return Math.max(...differentProfitArr)

};


var maxProfit = function(prices) {


    let left=0;
    let right=left+1;
    let differentProfitArr=[]

    while(left<prices.length && right<prices.length && left<right){

        if(prices[left]>=prices[right]){
            right++
        }else if(prices[left]<prices[right]){
            let profit=prices[right]-prices[left];
            differentProfitArr.push(profit);
            right++
        }

        if(right>prices.length-1){
            left++;
            right=left+1;
        }
    }
   if(differentProfitArr.length===0){
       return 0
   }

    return Math.max(...differentProfitArr)

};



///correct one///

var maxProfit = function(prices) {
    let buy=prices[0];
    prices[0]=0;
    let profit=0;
    for(let i=1;i<prices.length;i++){
        if(buy>prices[i]){
            buy=prices[i];
            prices[i]=0;
        }else{
            profit=Math.max(prices[i]-buy,profit)
        }
    }
    return profit
};


var maxProfit = function(prices) {
    let minBuyPrice=prices[0];
    let max=0;
    for(let i=1;i<prices.length;i++){
       let sellPrice=prices[i];
       const profit=sellPrice-minBuyPrice;
       max=Math.max(max,profit)
       minBuyPrice=Math.min(minBuyPrice,prices[i])
    }
    return max
};

