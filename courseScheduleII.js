var findOrder = function(numCourses, prerequisites) {
    
    const result = new Array(numCourses).fill(0)
    const inDegree = new Array(numCourses).fill(0);
    console.log('before=>',result,inDegree)
     for(const pre of prerequisites) {
         console.log('pre=>',pre)
        inDegree[pre[0]]++
    }

        const zeroDegree = [];

    for(let i = 0; i < numCourses; i++) {
        if(inDegree[i]===0) {
            zeroDegree.push(i);
        }
    }

    // Topological sort not possible
    if(zeroDegree.length === 0) return []

    let i = 0
    while(zeroDegree.length) {
        const course = zeroDegree.pop()
        // Add course to the result array 
        result[i++] = course
        for(const pre of prerequisites) {
            if(course === pre[1]) {
                inDegree[pre[0]]--
                if(inDegree[pre[0]]===0) {
                    zeroDegree.push(pre[0])
                }
            }
        }
    }

    // Topological sort not possible
    for(const num of inDegree) {
        if(num!== 0) return []
    }

    return result;
};