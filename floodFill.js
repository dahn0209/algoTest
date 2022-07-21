/**
 */
///DFS////
/**
 1. Edge Case: check if list is None, or the cliced on image is already same color
 2. call DFS function fill
 3. Base Case:check if Index is out of bound or current pixel is not euqal to initial pixel
 */

var floodFill = function(image, sr, sc, newColor) {

    //In Fill function//
    //out of Bounds checks//
    //selecte color is not the same color as starting point return//
    if(image===null||image.length<1||image[sr][sc]===newColor){
        return image
    }
    const initCol=image[sr][sc];
    const fill=(image,r,c,newColor,initCol)=>{
        if(r<0 || r>=image.length ||c <0 || c>=image[0].length ||initCol!==image[r][c]){
            return;
        }
        image[r][c]=newColor;
        ///going up
        fill(image,r-1,c,newColor,initCol);
        //going down//
        fill(image,r+1,c,newColor,initCol);
        //going left//
        fill(image,r,c-1,newColor,initCol);
        //going right//
        fill(image,r,c+1,newColor,initCol);
    }
    fill(image,sr,sc,newColor,initCol);

    return image;
};
