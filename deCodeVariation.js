function decodeVariations(S) {
	/**
	@param S: string
	@return: integer
	*/

	// your code goes here
  let result=[];
  let obj={
    1:'A',
    2:'B',
    3:'C',
    4:'D',
    5:'E',
    6:'F',
    7:'G',
    8:'H',
    9:'I',
    10:'J',
    11:'K',
    12:'L',
    13:'M',
    14:'N',
    15:'O',
    16:'P',
    17:'Q',
    18:'R',
    19:'S',
    20:'T',
    21:'U',
    22:'V',
    23:'W',
    24:'X',
    25:'Y',
    26:'Z'
  };
  let secObj={}
for(let key in obj){
  if(S.includes(key)){
    let str=''
    let value=obj[key];
    secObj[key]=value
  }
}

  console.log(secObj)


}

var decodeVariations = function(s) {
  var len = s.length;
  var tmp = 0;
  var tmp1 = 1;
  var tmp2 = 0;
  var num1 = 0;
  var num2 = 0;

  if (s === '' || s[0] === '0') return 0;

  for (var i = 1; i <= len; i++) {
    num1 = Number(s.substr(i - 1, 1));
    num2 = Number(s.substr(i - 2, 2));
    if (num1 !== 0) tmp += tmp1;
    if (10 <= num2 && num2 <= 26) tmp += tmp2;
    tmp2 = tmp1;
    tmp1 = tmp;
    tmp = 0;
  }

  return tmp1;
};


/////recursion////
function decodeVariations(S) {
	/**
	@param S: string
	@return: integer
	*/

	// your code goes here
  const check = (count, start) => {

         const char = S[start]

         if (char === '0') {
             return 0
         }

         if (start >= S.length - 1) {
             return 1
         }

         switch (char) {
             case '1':
                 // 10
                 if (S[start + 1] === '0') {
                     return check(count, start + 2)
                 } else {
                     //1 or 1x
                     return check(count, start + 1) + check(count, start + 2)
                 }
             case '2':
                 // 20
                 if (S[start + 1] === '0') {
                     return check(count, start + 2)
                 } else {
                     // 27
                     if (S[start + 1] > 6) {
                         return check(count, start + 1)
                     } else {
                         // 2. or 2x
                         return check(count, start + 1) + check(count, start +2)
                     }
                 }
             default:
                 return check(count, start + 1)
         }
    }
  return check(0, 0)
}
