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
        let place=columnNumber%26; ////columunNumber-->27 if 27%26---> place=1
                                   ////columnNumber-->1  if 1%26---> place =1
        console.log('place=>',place)
        console.log('key[place]=>',key[place],'result=>',result)
        result=key[place]+result;//key[place]=A + result=''    newResult=>A
                                 ///columnNumber-->1. key[place]=A +result='A'  newResult=AA
        console.log('columnNumber=>',columnNumber,'place=>',place)
        console.log('NewResult=>',result)
        console.log('columnNumber=>',columnNumber)

        // if(place===0){
        //     columnNumber=Math.floor(columnNumber/26)-1      ////this is for when columnNumber is 26 because 26 will make place=0
        // }else{
        //     columnNumber=Math.floor(columnNumber/26)
        // }
        /////////OR///////
        columnNumber=place===0  ? Math.floor(columnNumber/26)-1: Math.floor(columnNumber/26)
        ////////OR//////
         // place===0  ? columnNumber=Math.floor(columnNumber/26)-1: columnNumber=Math.floor(columnNumber/26)

///since place!==0 b/c columnNumber=> 1 and  place=> 1,then columnNumber=Math.floor(columnNumber=27/26) -->columNumber now 1
//since place!==0 b/c columnNumber=> 1 place=> 1,then columberNumber=Math.floor(columnNumber=1/26)-->columnNUmber now 0
////since columnNumber=0, then youre outside loop
    }
    return result

};
