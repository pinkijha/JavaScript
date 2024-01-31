
//BYID
let para = document.getElementById("heading");
console.dir(para);

//By className
let heading = document.getElementsByClassName("para");
console.dir(heading);

//By Tag
let button = document.getElementsByTagName("button");
console.log(button);

// byQuerySelector
let firstEl = document.querySelectorAll("p");
console.log(firstEl);

/* 
// lets Practice
create a H2 heading element with text - "hello javascript " . append "from mumbai" to this text using js
 */

let head = document.querySelector("h2");
console.dir(head);
head.innerText = head.innerText + "from Mumbai";