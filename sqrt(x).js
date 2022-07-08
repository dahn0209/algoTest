/**
 * @param {number} x
 * @return {number}
 0 1 2......x
 pick the numer, then square of it right equal/smaller than x
 */
var mySqrt = function(x) {

    let left=0;
    let right=x;

    while(left<right){
        console.log('left=>',left, 'right=>',right)
        let mid=Math.ceil((left+right)/2)  //if  i===j+1, middle would be j;
        console.log('mid=>',mid)
        let square=mid**2;
        console.log('square=>',square)
        if(square===x)return mid
        if(square<x){
            left=mid
            console.log('leftAfter=>',left)
        }else{
            right=mid-1;
            console.log('rightAfter=>',right)
        }
    }
    return left
};


var mySqrt = function(x) {
    if(x<2) return x

    let left=0;
    let right=x;

    ///[0,1]//
    while(left<right){
        console.log('left=>',left, 'right=>',right)
        let mid=Math.floor((left+right)/2)  //if  i===j+1, middle would be j;
        console.log('mid=>',mid)
        let square=mid**2;
        console.log('square=>',square)
        if(square===x)return mid
        if(square<x){
            left=mid+1
            console.log('leftAfter=>',left)
        }else{
            right=mid;
            console.log('rightAfter=>',right)
        }
    }
    return right-1
};
