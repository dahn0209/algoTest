process.stdin.resume();
process.stdin.setEncoding('ascii');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
    __input_stdin += data;
});

/*
 * Complete the function below.
 * 
 * [1,2,2,3,1,6];
 *                                      include             [],                     not include
 *                                                      [1,2,2,3,1,6]    
 *                                           /                               \
 * 
 * 
 *                              [1],                                                    [] 
 *                              [2,2,3,1,6]                                         [2,2,3,1,6]
 * 
 * 
 *                          /                       \                              /                \
 * 
 * 
 *                 [1,2],                           [1],                    [2]                         []
 *              [2,3,1,6]                          [2,3,1,6]            [2,3,1,6]                  [2,3,1,6]
 * 
 *               /           \              /            \                   /                    \
 * 
 * 
 *      [1,2,2]         [1,2]         [1,2][3,1,6]    [1][3,1,6]      [2,2][3,1,6]           [][3,1,6]
 *       [3,1,6]        [3,1,6]
 * 
 *          /        \            /.   \.           /
 * 
 * 
 *  [1,2,2,3][1,6] [1,2,2][1,6] [1,2,3][1,6][1,2][1,6]
 * 
 * 
 */
function findLIS(s) {
   let arr=new Array(s.length).fill(1)
   ///create variable for max
   let maximum=0;
   ///create table w for lop
   for(let i=0;i<s.length;i++){
       for(let j=0;j<i;j++){
           if(s[i]>s[j]&& arr[i]<arr[j]+1){
               arr[i]=arr[j]+1;
           }
       }
   }
   ///find maximum///
   for(let i=0;i<s.length;i++){
       //if maximum is les than arr in i index
       if(maximum<arr[i]){
           //change maximum
           maximum=arr[i]
       }
   }
   return maximum
}