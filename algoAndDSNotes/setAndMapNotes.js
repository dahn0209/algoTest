
/////Set method/////

// const myArray=[1,2,3,4,5];
// const mySet=new Set(myArray); ////{1,2,3,4,5}


// const uniqueArray=[...mySet]  ///[1,2,3,4,5]


/////Add Method////

// mySet.add(6)  ////{1,2,3,4,5,6}

// mySet.add('6')  ////{1,2,3,4,5,'6'}

// mySet.add({channelName:'Javascript Mastery'}) //{1,2,3,4,5,{channelName:'Javascript Mastery'}}

// mySet.add([1,2,3])  ////{1,2,3,4,5,[1,2,3]}


///Delete method///

// mySet.delete(3)  ///{1,2,4,5,6}


///Clear method///clears everything

// mySet.clear()////{}

// /////has method  similar to array method includes
// console.log(mySet.has(5))   ///////true

// console.log(mySet.has(6))   ///////size

// ///size method///return number of element in set

// console.log(mySet.size) /////5

///array vs.Set

////arry is an ordered list of object.Therefore you have access specfici element through index.
// ex.  myArray=[1,2,3,4,5];
// console.log(myArray[3]) //////4
///set is unordered ppol of unique elements. Because of this, there is not integer index you can use to access a specific element of a set///
// ex.
// // console.log(mySet[3]) //////undefined

///set is good to avoid saving duplicate dates to struvture.



////map--> hold key value paris and rememebrs original insertion order of the keys use objects as keys


// const myMap=new Map([['name','John'],['surname','Doe']])//Map {'name'=>'John,'surname'=>'Doe'}

// ///javscript objkects only support one key object. Thus map solves this issuee//

// const myObject={};

// const a={};
// const b={};

// myObject[a]='a';
// console.log(myObject)////{'[object Object]':'a'}
// myObject[b]='b';

//  console.log(myObject) ////{'[object Object]':'b'}  a is overwritten by b


// const a={};
// const b={};

// const myMap=new Map([[a,'a'],[b,'b']]);

// console.log(myMap) ///Map {{}=>'a',{}=>'b'}


 /////Map set method-->equvialent of Add method of set//

//  const myMap=new Map([[{},'a'],[{},'b']]);

//  myMap.set({},'c');

//  console.log(myMap) ///Map {{}=>'a',{}=>'b',{}=>'c'}


//   myMap.set('a',2);///Map {{}=>'a',{}=>'b','a'=>2}

////delete method///delete element from map./////

 const myMap=new Map([[1,1]]);////Map {1=>1}

 myMap.delete(1);  ///Map {}  it deletes by specific key

  const myMap=new Map([[1,'one']]);

 myMap.delete(1);  ///Map {}  it deletes by specific key


 ////clear method////

  const myMap=new Map([[1,'one'],[2,'two']]);

  myMap.clear()/////Map {}



  ////has method////-->equivlanet to includes method of array

                   //  key
                   //   |
  const myMap=new Map([[1,'one'],[2,'two']]);   ///it always goes by specific keys which is the first index in each array

  console.log(myMap.has(1))/////true

  console.log(myMap.has(3))/////false

    console.log(myMap.has('one'))/////false b/c it searches by keys


////size  ///

 const myMap=new Map([[1,'one'],[2,'two']]);

 console.log(myMap.size)//////2
