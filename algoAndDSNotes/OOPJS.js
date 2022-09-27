// const circle={
//     raidus:1,    ///raidus is properties properties is used to holv values
//     location:{    ///location is properties
//         x:1,
//         y:1
//     },
//     draw:function(){   /////draw is a method  methodi is used to hold logic
//         console.log('draw')
//     }
// }

// circle.draw()  ///to acces memebers, use dot notation


/////factories or constructor function///
////Factory function/////

// function createCircle(radius){
//    return {
//     raidus:radius,    ///raidus is properties properties is used to holv values
//     draw:function(){   /////draw is a method  methodi is used to hold logic
//         console.log('draw')
//     }
//    }
// }

// const circle=createCircle(1)

//////constructor function////

// function Circle(radius){
//     this.radius=radius;     //this refrences the object that is executing this code// 
//     this.draw=function(){   ///draw is a method technically
//         console.log('draw')
//     }
// }
// const another=new Circle(1)  ////this points to global object
// ////new will create an empty object///



/////Constructor Property////



/////Adding/Removing Properties/////

// function Circle(radius){
//     this.radius=radius;     //this refrences the object that is executing this code// 
//     this.draw=function(){   ///draw is a method technically
//         console.log('draw')
//     }
// }
// const circle=new Circle(10)

////Adding properties
///user.token='asdasads'

// circle.location={x:1};
///or///
// circle['location']={x:1};
// //or///
// const propertyName='center location';
// circle[propertyName]={x:1}

////deleting properties//////

// delete ciricle.location



////Enumerationg Properties//////


// function Circle(radius){
//     this.radius=radius;     //this refrences the object that is executing this code// 
//     this.draw=function(){   ///draw is a method technically
//         console.log('draw')
//     }
// }
// const circle=new Circle(10)
// ///for loop///
// for(let key in circle){
    
// }


/////Abstraction/////
////-Hides the details///
/////-Show the essential///


// function Circle(radius){
//     this.radius=radius;     //this refrences the object that is executing this code// 
//     this.defaultLocation={x:0,y:0};////we want to hide defaultLocation
//     this.computeOptimumLocation=function(){///we want to hide computeOptimumLocation///
//         //...
//     }
//     this.draw=function(){   ///draw is a method technically
//          this.computeOptimumLocation()
//         console.log('draw')
//     }
// }
// const circle=new Circle(10)


/////Private Properties and Method 


// function Circle(radius){
//     let color='red'////setting this as a variable and not a this will make it private
//     this.radius=radius;     //this refrences the object that is executing this code// 
//     let defaultLocation={x:0,y:0};////we want to hide defaultLocation by making it a variable and not attached to this
    
//     this.computeOptimumLocation=function(){///we want to hide computeOptimumLocation///
//         //...
//     }
//     this.draw=function(){   ///draw is a method technically
//         computeOptimumLocation()  ///this will only allow us to acces computeOptiumLocation within draw function b/c of closure
//         console.log('draw')
//     }
// }
// const circle=new Circle(10)



/////Getters/Setters///////


function Circle(radius){
    let color='red'////setting this as a variable and not a this will make it private
    this.radius=radius;     //this refrences the object that is executing this code// 
    let defaultLocation={x:0,y:0};////we want to hide defaultLocation by making it a variable and not attached to this
    
this.getDefaultLocation=function(){
    return defaultLocation
}
    this.draw=function(){   ///draw is a method technically
        console.log('draw')
    }
    Object.defineProperty(this,'defaultLocation',{
        get:function(){
            return defaultLocation
        },
        set:function(value){
            if(!value.x||!value.y){
                throw new Error('invalid location')
            }
            defaultLocation=value
        }
    })
}
const circle=new Circle(10)
circle.defaultLocation=1
circle.draw()
