
/////Set method/////

const myArray=[1,2,3,4,5];
const mySet=new Set(myArray); ////{1,2,3,4,5}


// const uniqueArray=[...mySet]  ///[1,2,3,4,5]


/////Add Method////

// mySet.add(6)  ////{1,2,3,4,5,6}

// mySet.add('6')  ////{1,2,3,4,5,'6'}

// mySet.add({channelName:'Javascript Mastery'}) //{1,2,3,4,5,{channelName:'Javascript Mastery'}}

// mySet.add([1,2,3])  ////{1,2,3,4,5,[1,2,3]}


///Delete method///

// mySet.delete(3)  ///{1,2,4,5,6}


///Clear method///clears everything

mySet.clear()////{}

/////has method  similar to array method includes
console.log(mySet.has(5))   ///////true

console.log(mySet.has(6))   ///////size

///size method///return number of element in set

console.log(mySet.size) /////5

///array vs.Set

////arry is an ordered list of object.Therefore you have access specfici element through index.
// ex.  myArray=[1,2,3,4,5];
// console.log(myArray[3]) //////4
///set is unordered ppol of unique elements. Because of this, there is not integer index you can use to access a specific element of a set///
// ex.
// // console.log(mySet[3]) //////undefined

///set is good to avoid saving duplicate dates to struvture.
