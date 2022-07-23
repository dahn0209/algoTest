var canConstruct = function(ransomNote, magazine) {

    if(ransomNote.length>magazine.length) return false;


    let ransomNoteObj={}

    for(let eachEl of ransomNote){
             if(eachEl in ransomNoteObj){
            ransomNoteObj[eachEl]+=1;
        }else{
            ransomNoteObj[eachEl]=1
        }
    }

    for(let eachEl of magazine){
        if(ransomNote.includes(eachEl)){
            ransomNoteObj[eachEl]--;
        }
    }

    let result=true;

    for(let eachEl in ransomNoteObj){
        let val=ransomNoteObj[eachEl];

        if(val>0){
            result=false
        }
    }

   return result
};


var canConstruct = function(ransomNote, magazine) {
        if (ransomNote.length > magazine.length) { return false; }
    var ransomNoteArr = ransomNote.split('');

    var oldMagazineLength = magazine.length;
    ransomNoteArr.forEach(function(item,index){
        magazine = magazine.replace(item,'');
    });

    if(oldMagazineLength === magazine.length +ransomNoteArr.length) {
        return true;
    } else {
        return false;
    }

};
