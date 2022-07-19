
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
