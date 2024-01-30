let week = document.querySelector(".parent");
// console.log(week);
// console.log(week.children);
// console.log(week.children[1]);
// week.innerHTML;

/* // using for loop
for(let i=0; i<week.children.length; i++){
    console.log(week.children[i].innerHTML);
} */

/* // on operations parents to child
week.children[1].style.color="red";
console.log(week.firstElementChild);
console.log(week.lastElementChild); */


//operations on child to parent
/* let day1 = document.querySelector(".day");
console.log(day1);
console.log(day1.parentElement);
console.log(day1.nextElementSibling); 
console.log('NODES:', week.childNodes);  */


// create elements (create html page thrw JS)
let div = document.createElement("div");
div.className = "TodaysTarget";
div.id = Math.round(Math.random()*10); 
div.style.backgroundColor = "green"
div.style.color = "white"
div.style.border = "5px solid yellow"
div.setAttribute("title", "Target")
// div.innerHTML = "Target"   /// instead of write this you can also use the below code

let text = document.createTextNode("TodaysTarget")
div.appendChild(text)
document.body.appendChild(div);
console.log(div);

