var findSubstring = function(s, words) {
    // naive solution:
    // 1. loop through s  O(n)
    //    2. loop through m words  O(m)
    //         3. loop rhought word O(k)
    //            n/k
    // total: n/k * n * m * k => m * n * n
    const result = []

    if (s === '' || words.length === 0) return result

    const map = new Map()

    for (let i = 0; i < words.length; i++) {
      if (map.has(words[i])) {
        map.set(words[i], map.get(words[i]) + 1)
      } else {
        map.set(words[i], 1)
      }
    }
    const k = words[0].length
    for (let i = 0; i < s.length; i++) {
      const wordMap = new Map(map)
      let j = i

      while (j + k - 1 < s.length) {
        const sub = s.slice(j, j + k)
        if (wordMap.get(sub) > 0) {
          wordMap.set(sub, wordMap.get(sub) - 1)
        } else {
          break
        }

        j += k
      }
      if (j - i === words.length * k) {
        result.push(i)
      }
   }

    return result

};


var findSubstring = function(s, words) {
    if(!words||words.length===0){
        return []
    }

    const wordCounts=words.length;
    const singleWordLen=words[0].length
    const totalLength=wordCounts*singleWordLen;
    const result=[];
    const map={}

    for( let word of words){
        map[word]=~~map[word]+1 ///converts to integer
    }
    console.log(map)
    for(let i=0;i<s.length-totalLength+1;i++){
        let copy=Object.assign({},map)////copy of map//
        for(let j=i;j<i+totalLength;j+=singleWordLen){
            const str=s.substr(j,singleWordLen)
            if(!(str in copy)){  ///if it exists//
                break
            }

            if(--copy[str]===0){    //what is double negative   ///decrament
                delete copy[str]
            }
        }
        if(Object.keys(copy).length===0){
            result.push(i)
        }
    }
    return result
};
