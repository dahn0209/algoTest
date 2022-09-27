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

function Circle(radius){
    this.radius=radius;     //this refrences the object that is executing this code// 
    this.draw=function(){   ///draw is a method technically
        console.log('draw')
    }
}
const another=new Circle(1)