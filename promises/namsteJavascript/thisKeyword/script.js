"use strict";
//this in global space
console.log(this);

//this inside a function
function x(){
    console.log(this);
}
x();

//this in strict mode - (this substitution)
window.x();

// this inside a objects method
const obj = {
    a:20,
    x: function(){
        console.log(this);
    }
}
obj.x();

// call apply bind method (sharing method)

const student = {
    name:"pinki",
    x: function(){
        console.log(this.name);
    }
}
student.x();

const student1 = {
    name:"shailesh"
}
student.x.call(student1);
