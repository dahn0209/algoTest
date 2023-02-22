var matrixReshape = function(mat, r, c) {
    
    //First, calculate the numer of elelemts in the original matrix and compare to the propsed matrix 
    //If the numenr fo elements are the same, contine, otherwise, reutnr the orginal matrix
    let rows=mat.length;
    let columns=mat[0].length
    if(rows*columns !== r*c){
        return mat;
    }
    //second, creat an empty array to hol all the elements
    let longList=[]
    //third, create an empy array to hold the answer;
    let answer=[];
    for(let row of mat){
        for(let column of row){
    //fourth, interate througha all of the elements of the original array and add them to the empty array//
            longList.push(column)
        }
    }
    for(let i=0;i<longList.length;i+=c){
        answer.push(longList.slice(i,i+c))
    }
    ///fifith, slice the element in that array by the length of the colums in the propposed array.Add the slices to the answer array.
    //finally, return the answer matrix
    return answer
    };


    var matrixReshape = function(mat, r, c) {
    
        //First, calculate the numer of elelemts in the original matrix and compare to the propsed matrix 
        //If the numenr fo elements are the same, contine, otherwise, reutnr the orginal matrix
        let rows=mat.length;
        let columns=mat[0].length
        if(rows*columns !== r*c){
            return mat;
        }
        //second, creat an empty array to hol all the elements
        let longList=mat.flat();
        //third, create an empy array to hold the answer;
        let answer=[];
        
        
        for(let i=0;i<longList.length;i+=c){
            answer.push(longList.slice(i,i+c))
        }
        ///fifith, slice the element in that array by the length of the colums in the propposed array.Add the slices to the answer array.
        //finally, return the answer matrix
        return answer
        };