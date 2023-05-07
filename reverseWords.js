/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  
    let arr=s.split(' ');
  
    let reverseStr='';
  
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i]==='') continue;
        if(reverseStr.length>0){
            reverseStr+=' ';
        }
        reverseStr+=arr[i]
    }
      return(reverseStr)
  };

  var reverseWords = function(s) {
  
    let arr=s.split(' ');
    let arr2=[];
  
  
    for(let i=arr.length-1;i>=0;i--){
       
        if(arr[i]!==''){
            arr2.push(arr[i])
        }
    }
    return(arr2.join(' '))
  };