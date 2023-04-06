/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {

    let result=new Array(candies.length).fill(null)
    let max=Math.max(...candies)
    
    for(let i=0;i<candies.length;i++){
        candies[i]=candies[i]+extraCandies;
        if(candies[i]>=max){
            result[i]=true
        }else{
            result[i]=false
        }
    }
    return (result)
};