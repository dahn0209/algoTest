function perfectSquare(num){
    
    let squareRootNum=num**0.5/////num to the power of 0.5 will show the square root of that num;
    
    if(squareRootNum%1===0){   /////if the squareRootNum is a while number when divided by 1, then return true
        return true
    }
    
    return false ///if not, return fals
}