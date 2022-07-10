function binarySearch(array, target) {

  // Write your code here.
  let left=0;
  let right=array.length-1
  while(left<=right){
    let mid=Math.floor((left+right)/2)
    if(target===array[mid]){
      return mid
    }
    else if(target<array[mid]){
      right=mid-1;

    }else if(target>array[mid]){
      left=mid+1;
    }
  }
  if(array[left]===target){
    return left
  }else {
    return -1
  }
}
