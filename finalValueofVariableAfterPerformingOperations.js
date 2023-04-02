/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {

    let val=0
    for(let i=0;i<operations.length;i++){
        let eachOperation=operations[i]
        if(eachOperation==="++X" || eachOperation==="X++"){
            operations[i]=1
        }
        if(eachOperation==="X--"||eachOperation==="--X"){
            operations[i]=-1
        }
        val+=operations[i]
    }
    return val
};