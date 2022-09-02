var convertToTitle = function(n) {
  var num = n;
  var tmp = 0;
  var res = '';
  while (num > 0) {
    tmp = num % 26;
    if (tmp === 0) tmp = 26;
    res = getChar(tmp) + res;
    num = (num - tmp) / 26;
  }
  return res;
};

var getChar = function (num) {
  var start = 'A'.charCodeAt(0);
  return String.fromCharCode(start + num - 1);
};



var convertToTitle = function(columnNumber) {
    let result='';
    let key=['Z','A','B','C','D','E','F','G','H','I','J','K',
             'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y'];

    if(columnNumber<=0){
        return result
    }

    while(columnNumber>0){
        let place=columnNumber%26;
        console.log('place=>',place)
        console.log('key[place]=>',key[place],'result=>',result)
        result=key[place]+result;
        console.log('columnNumber=>',columnNumber,'place=>',place)

        columnNumber=place===0 ? Math.floor(columnNumber/26)-1: Math.floor(columnNumber/26)
    }
    return result

};
