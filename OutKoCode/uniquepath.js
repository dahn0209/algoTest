var uniquePaths = function(m, n) {
    var uniquePaths_aux = function (i,j){
        if(i===m || j===n){
            return 0;
        }

        if(i===m-1 && j===n-1){
            return 1;
        }

        return uniquePaths_aux(i+1, j) + uniquePaths_aux(i, j+1);
    }

    uniquePaths_aux(0, 0);
};