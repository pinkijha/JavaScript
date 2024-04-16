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