var fib = function(num) {

    ////this is the base case///
 if(num<=1){    ////if num is less than or equal to 1 then just reutnr the num paramenter
     return num
 }
 
 ////write the first two sums of the fobonacci sequences starting from variable first =0
 ///and second=1;
 let first=0;
 let second=1;
 let sum=first+second;
 
 for(let i=2;i<num;i++){///use a for loop starting from 2 since we've already added the first 2 numbers of the sequence;
 
 first=second; ///as we loop, change the first to second; ex. 0--->1;
 second=sum;  ///change to second into the sum ex. 1--->1
 sum=first+second////change the sum into the new values of first variable and second variable  ex. 1+1=2
 ///the loop will keep going until it reaches the end//
     
 }
 
 return sum ////eventually return the last sum
 
};