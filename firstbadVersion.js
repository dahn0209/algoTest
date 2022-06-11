var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
             let start=1;
        let end=n;

        while(start <= end){
            // Find the mid index
            let mid=Math.floor((start + end)/2);
            //  s   m   e
            // [1,2,3,4,5]       //4
             //  s m e
            //  [1,2,3]  //1

            if (isBadVersion(mid)){
                // Bad version found and equal trees (look left for more bads)
                end = mid - 1;
             //  s e
            //  [1,2,3]
            } else {

                // If bad version already found, no bad now (look right)
                // No bad version found yet, no bad now (look right)
                start = mid + 1;
                //        s e
                // [1,2,3,4,5]
            }
        }
           // Start is ontop of first bad instance
        return start;

    };
};
