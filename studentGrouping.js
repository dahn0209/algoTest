let scores1={
  'A':110,
  'B':30,
  'C':50,
  'D':55,
}

let groups1=[['A'],['B'],['C','D']];

function groups(scores, groups){
  let objGroup={}
  /////students scores in array
  let arrVal=Object.values(scores)

  /////find the highest score to get max score and range///
  let highestScoreNum=Math.max(...arrVal)

  /////create group in objGroup by looping through interval of 15////////
  for(let i=0;i<=highestScoreNum;i+=15){
       objGroup[i]=0;
   }

  //get key in objGroup in an array//
  let arrKey=Object.keys(objGroup);
//this will find the numbers students  from the scores obj parameter value and then put that value into the value of the objGroup////
  for(let eachScore of arrVal){
    for(let i=0;i<arrKey.length;i++){
      let eachElScoreRangeGroup=parseInt(arrKey[i]);

      if(eachScore>parseInt(arrKey[i])&&eachScore<=parseInt(arrKey[i+1])){
        objGroup[eachElScoreRangeGroup]+=1;
      }
    }
///This conditional is in case the highestScoreNum has a remainder when devided by 15
    if(eachScore>(parseInt(arrKey[arrKey.length-1]))&& eachScore<=highestScoreNum){
      objGroup[arrKey[arrKey.length-1]]+=1;
    }
  }
  /////this variable is trying to get the total number of groups in objGroup
  let numOfGroup=0;
  for (let eachGroup in objGroup){
    let value=objGroup[eachGroup];
    //if there are members in the group, the numberOfGroup variable increases by 1
    if(value>0){
      numOfGroup+=1;
    }
  }
  ////this checks to see if the numOfGroups is equal to total number of groups in groups paramets value
  if(numOfGroup===groups.length){
    // console.log(true)
    return true
  }else{
    // console.log(false)
    return false
  }
}
// groups(scores1,groups1)

console.log(groups(scores1,groups1))
