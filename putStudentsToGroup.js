let scores1={
  'A':120,
  'B':30,
  'C':50,
  'D':55,
  'E':1,
  'F':20,
  'G':119
}


function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}


function groups(scores){
  let objGroup={}
  let result=[]
  /////students scores in array
  let arrVal=Object.values(scores)
  /////find the highest score to get max score and range///
  let highestScoreNum=Math.max(...arrVal)
  /////create group in objGroup with key and empyting array as value////////
  for(let i=0;i<=highestScoreNum;i+=15){
       objGroup[i]=[];
   }
  //get lists of key in objGroup in an array//
  let arrKey=Object.keys(objGroup);
  ///this will arrange the students  from the scores obj into the value of the objGroup////
  for(let eachStudentscore of arrVal){
    for(let i=0; i<arrKey.length;i++){
      let eachGroupEl=parseInt(arrKey[i])
      if(eachStudentscore>parseInt(arrKey[i])&&eachStudentscore<=parseInt(arrKey[i+1])){
          ///called a helper function to get the key of this particular value
        let studentName=getKeyByValue(scores,eachStudentscore)
        ///push the studentName in the value of objGroup
        objGroup[eachGroupEl].push(studentName);
      }
    }
    ///This conditional is in case the highestScoreNum has a remainder when devided by 15
    if(eachStudentscore>parseInt(arrKey[arrKey.length-1])&& eachStudentscore<=highestScoreNum){
      ///called a helper function to get the key of this particular value
      let studentNameLast=getKeyByValue(scores,eachStudentscore)
        objGroup[arrKey[arrKey.length-1]].push(studentNameLast);
    }
  }
  //loop through objGroup to push the groups into the result array;
  for(let eachGroup in objGroup){
    let value=objGroup[eachGroup];
    ///check to see if there are students in the group before pushing the valye into result
    if(value.length>0){
      result.push(value)
    }
  }
  return result
}

console.log(groups(scores1))
