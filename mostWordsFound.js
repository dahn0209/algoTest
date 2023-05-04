var mostWordsFound = function(sentences) {

    for(let i=0;i< sentences.length;i++){
        sentences[i]=(sentences[i].split(' ').length)
    }
    
    return Math.max(...sentences)
};