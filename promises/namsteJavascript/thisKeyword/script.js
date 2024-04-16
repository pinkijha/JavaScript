"use strict";
//this in global space
console.log(this);

//this inside a function
function x(){
    console.log(this);
}

//this in strict mode - (this substitution)
window.x();
