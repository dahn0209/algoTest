/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {

    let obj={};
    
    for(let i=0;i<heights.length;i++){

        if(!obj[i]){
            obj[i]=heights[i]
        }
    }
    let ObjArr=(Object.entries(obj))

    ObjArr.sort((a,b)=>b[1]-a[1])

    let result=[]

    for(let eachPerson of ObjArr){
        
        letPersonId=parseInt(eachPerson[0])
        result.push(names[letPersonId])
    }
    return (result)
};
