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
