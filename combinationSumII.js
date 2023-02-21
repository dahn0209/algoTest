var combinationSum2 = function(candidates, target) {
    ///tree////DFS////
    const result=[]
    candidates.sort((a,b)=>a-b);

    //dfs//
    const dfs=(i,candidates,target,slate)=>{
        //backtracking case;
        if(target<0) return
        //base case
        if(target===0){
            result.push([...slate]);
            return;
        }
        //dfs recursive case//
        for(let j=i;j<candidates.length;j++){
            if(i!==j && candidates[j]===candidates[j-1])continue   ///this will skip duplicates//
            slate.push(candidates[j])
            //dfs helper
            dfs(j+1,candidates,target-candidates[j],slate)  //target-candidate-->way to keep track of sum
            //j+1 keeps it going down the candidates array///
            slate.pop()
        }

    }
      dfs(0,candidates,target,[])
        return result;
};




function subArraySum(candidates,target)
{
      const result=[];
    //sort input//
    // candidates.sort((a,b)=>a-b);
    ///dfs recursive
    const dfs=(i,candidates, target,slate)=>{
        //backtracking case
        if(target<0) return
        //base case//
        if(target===0){
            result.push(slate.slice())
            return
        }
        //dfs recursive case//
        for(let j=i;j<candidates.length;j++){
            if(i!==j&& candidates[j]===candidates[j-1]){
                continue;
            }
            slate.push(candidates[j]);
            dfs(j+1,candidates,target-candidates[j],slate);
            slate.pop()
        }
    }
    dfs(0,candidates,target,[]);
 
    return result
}

const minSum=(server,target)=>{
  let result=subArraySum(server,target);
  if(result.length===0){
    return -1
  }
  let newResult=[]
  for(let eachArr of result){
    newResult.push(eachArr.length)
  }
  return Math.min(...newResult)
}

console.log(minSum([1, 1, 2, 4],3))
console.log(minSum([1,1,2,4,4],10))
console.log(minSum([1,1,2,4,4],20))
console.log(minSum([3,1,1,1,1,1], 4));




logs = ["30 99 sign-in","30 105 sign-out","12 100 sign-in","20 80 sign-in","12 120 sign-out","20 101 sign-out","21 110 sign-in"]


function processLogs(arr,sec){
  let signIn={};
  let signOut={};
  let result=[]

  for(let eachLog of arr){
    console.log('eachLog=>',eachLog)
    let splitEachLog=eachLog.split(' ')
    let user_id=splitEachLog[0];
    let user_time=splitEachLog[1];
    let status=splitEachLog[2];
    if(status==='sign-in'){
      signIn[user_id]=user_time
    }
    if(status==='sign-out'){
      signOut[user_id]=user_time
    }
  }
  console.log(signIn,signOut);

  for(let key in signOut){
    let signInTimeStart=parseInt(signIn[key]);
    let signOutTime=parseInt(signOut[key]);
    let difference=signOutTime-signInTimeStart
    if((difference)<=sec){
      result.push(key)
    }
  }
  console.log('result->',result)
  return (result)
  

}


processLogs(logs,20)
