/**
 * @param {string} digits
 * @return {string[]}
 //Combination permutation and backtracking
 */
var letterCombinations = function(digits) {
    if(digits.length===0){
        return []
    }
    let obj={};
    let num='23456789'
    let alphabet = 'abc def ghi jkl mno pqrs tuv wxyz';
    let alphaSplit=alphabet.split(' ')

    for(let i=0;i<num.length;i++){
        obj[num[i]]=alphaSplit[i]
    }
    let result=[];

    const dfs=(i,digits,slate)=>{
        //base case//
        if(i===digits.length){
            result.push(slate.join(''));
            return
        }

        // dfs recursive case//
        let chars=obj[digits[i]];


        for(let eachChar of chars){
            slate.push(eachChar);
            dfs(i+1,digits,slate);
            slate.pop()
        }
    }
    dfs(0,digits,[]);

    return result
};
