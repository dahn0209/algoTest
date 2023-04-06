/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {

    let result=new Array(accounts.length).fill(0);

    for(let i=0;i<accounts.length;i++){
        let eachCustomer=accounts[i];
        for(let eachBank of eachCustomer){
            result[i]+=eachBank
        }
    }
    return(Math.max(...result))
};