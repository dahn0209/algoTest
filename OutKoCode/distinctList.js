function distinctList(arr){
    let result=0;

    let obj={};

    for (let eachNum of arr){
        if(!obj[eachNum]){
            obj[eachNum]=1
        }else{
            obj[eachNum]++
        }
    }

    for(let key in obj){
        obj[key]--;

        if(obj[key]>=1){
            result+=obj[key]
        }
    }
    return result;
}