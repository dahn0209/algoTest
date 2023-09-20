var wordBreak = function(s, wordDict,memo={}) {
    // Return already solved for sentance
 if(memo[s]!==undefined){ 
     return memo[s]
 }
 // Base case of yet unsolved sentance
 if(s.length===0) return ['']

 const output = []

 for(const word of wordDict) {
     if(s.indexOf(word)===0) {
         const suffix = s.slice(word.length)
         // All different sentances to make the suffix
         const suffixWays = wordBreak(suffix, wordDict, memo)
         // Add the word to all the different sentance combinations
         const targetWays = suffixWays.map(way => word + (way.length ? ' ' : '') + way)
         output.push(...targetWays)
     }
 }

 memo[s] = output
 return output
};



var wordBreak = function(s, wordDict) {
    
    let memo={}
       // Return already solved for sentance
    if(memo[s]!==undefined){ 
        return memo[s]
    }
    // Base case of yet unsolved sentance
    if(s.length===0) return ['']

    const output = []

    for(const word of wordDict) {
        if(s.indexOf(word)===0) {
            const suffix = s.slice(word.length)
            // All different sentances to make the suffix
            const suffixWays = wordBreak(suffix, wordDict, memo)
            // Add the word to all the different sentance combinations
            const targetWays = suffixWays.map(way => word + (way.length ? ' ' : '') + way)
            output.push(...targetWays)
        }
    }

    memo[s] = output
    return output
};