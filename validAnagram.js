function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    // lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    if(lookup[letter]){
      lookup[letter]+=1;
    }
    else{
      lookup[letter]=1
    }
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      console.log(false)
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  console.log(true);
  return true;
}




function isAnagram(s, t) {
   if (s.length === t.length) {
    let sArray = s.split('');
    let tArray = t.split('');

    sArray.sort();
    tArray.sort();

    for (let i = 0; i < s.length; i++) {
      if (sArray[i] !== tArray[i]) {
        return false;
      }
    }

    return true;
  } else {
    return false;
  }
}


var isAnagram = function(s, t) {

    if(s.length!==t.length){
        return false;
    }

    const sLetters={};

    for(let char of s){
        if(!sLetters[char]){
            sLetters[char]=1
        }else{
            sLetters[char]++
        }
    }

    console.log(sLetters)


    for(let char of t){
        if(sLetters[char]===null){

            return false;
        }

        if(sLetters[char]){
            sLetters[char]--;
        }

        if(sLetters[char]===0){
            delete sLetters[char]
        }
    }


    return Object.keys(sLetters).length===0
};

validAnagram('', '');

validAnagram('aaz', 'zza');

validAnagram('anagram', 'nagaram');

validAnagram('rat', 'car');

validAnagram('awesome', 'awesom');
