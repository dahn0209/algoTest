function fitsOneByte(chunk){
  if(chunk.length===0){
    return false
  }

  for(let eachChunk of chunk){
    if(eachChunk<'0' || eachChunk >'9'){
      return false
    }
  }

  if(chunk.length>=2 && chunk[0]==='0'){
    return false
  }

  return 0 <= parseInt(chunk) && parseInt(chunk)<=255
}







function validateIP(ip) {
	/**
	@param ip: string
	@return: boolean
	*/
	// your code goes here
  let ipToArr=ip.split('.');
  if(ipToArr.length!=4){
    return false
  }
  for(let eachEl of ipToArr){
    if(!fitsOneByte(eachEl)){
      return false
    }
  }
  return true
}
