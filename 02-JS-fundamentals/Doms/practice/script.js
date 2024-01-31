
/* 
// lets Practice
create a H2 heading element with text - "hello javascript " . append "from mumbai" to this text using js
 */
let head2 = document.querySelector("h2");
console.log(head2);
head2.innerText = head2.innerText +"Love you so much";

// create 3 div with box name. access them and add some unique text to each of them

let divs = document.getElementById("heading");
console.log(divs);

// divs.style.color = "red";

let indx = 1;
for (let div of divs){
 div.innerHTML = `new unique value ${indx}`;
 indx++;
}