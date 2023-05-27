/*
 * Complete the 'coinSum' function below.     ////combination////
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY coins
 *  2. INTEGER total
 * 
 * coins: [1,2,4]
 * total: 5
 * 
 * recursive tree          -1              -2                   -4
 * 
 *                                          5
 * 
 * 
 * 
 *                     4                    3                        1
 * 
 * 
 * 
 *          3        2       0                                 0     -1        -3
 * 
 * Binary Decision
 * 
 *         left-->subtract last coin                         right-> pop last coin
 *                                    5,  [1,2,4]
 *                              /                               \
 * 
                    1, [1,2,4]                                          5, [1,2] 
                    
                /              \                                /                      \
    
        -3 [1,2,4]              1 [1,2]                     3[1,2]                      5[1]
        
                             /          \
        
                        -1 [1,2]            1[1]        1 [1,2]                         4[1]
                        
                                        /         \             \
                                        
                                    0 [1]        1 []         1[1]               3[1]  
                                    
                                /           \
                                
                            -1 [1]         0 []                
 * 
 *                  
 * Recursion:   time: O (2^(M+N)). space: O (2^(M+N))
 * 
 * Memoization-- we use cache
 * 
 * 1. Create Cache
 * 2. Check Cache
 * 3. Write to Cache
 * 
 * Memoization: time: O(M*N)       space: O(M*N)
 * 
 * cache={ 
 *      '1,[1,2]: 1
 * 
 * }
 *                 
 * Tabulation    TIME:  O(M*N).   Space: O(M*N)---matrix.  or O(M)--single array
 * 
 * 1.identity factors.              total,coins
 * 2. create table with incrementally increasing factors
 *      -what's smallest version?
 *      -what's eventual version?
 * 3. Determine formula
 * 4. Create foundation-create first row
 * 5. Fill out rest of table      
 * 
 * 
 *          0       1       2       3       4       5
 * 
 * []       1       0       0       0       0       0
 * 
 * [1]      1       1       1       1       1       1
 * 
 *[1,2]     1       1       2       2       3       3
 * 
 *[1,2,4]   1       1       2       2       4       4           
 *                         
 */

 
// function coinSum(coinsInput, totalInput) {
//     const cache={}
//     // Write your code here
//     //invalidate helper
//     const findWays=(total,coins)=>{
//         let key= total + '_' +coins;
//         if(key in cache){
//             return cache[key]
//         }
//         ///base cases
//         if(total<0){
//             return 0
//         }
//         if(coins.length===0){
//             if(total>0){
//                 return 0
//             }
//             return 1
//         }
        
//         //recursive case
//         let left=findWays(total-coins[coins.length-1],coins);
//         let popped=coins.pop();
//         let right=findWays(total,coins);
//         coins.push(popped)
        
//         cache[key]=left+right
//         return left+right
//     }
    
//     return findWays(totalInput,coinsInput)

// }

const coinSum=(coinsInput,totalInput)=>{
    
    const table=new Array(totalInput+1).fill(0);
    table[0]=1;
    
    for(let coin of coinsInput){
        for (let i=coin;i<table.length;i++){
            table[i]=table[i]+table[i-coin]
        }
    }

    return table[totalInput]

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const coinsCount = parseInt(readLine().trim(), 10);

    let coins = [];

    for (let i = 0; i < coinsCount; i++) {
        const coinsItem = parseInt(readLine().trim(), 10);
        coins.push(coinsItem);
    }

    const total = parseInt(readLine().trim(), 10);

    const result = coinSum(coins, total);

    ws.write(result + '\n');

    ws.end();
}