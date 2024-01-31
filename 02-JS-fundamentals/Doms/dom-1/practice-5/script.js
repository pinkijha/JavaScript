let b1 = document.querySelector(".box1");
console.log(b1);
b1.style.backgroundColor = "yellow"
b1.style.height = "100px"
b1.style.width = "100px"
b1.style.border = "4px solid white"



//set | Get attribute
//set
b1 = document.querySelector(".box1");
// b1.setAttribute(".box1", ".box5")
console.log(b1.setAttribute("class", "box5"));

//get attribute
let b2 = document.querySelector("div");
console.log(b2.getAttribute("class"));


// create button trw JS using createElement

//node.append
let btn = document.createElement("button");
console.log(btn);
btn.innerHTML = "Click Me!";

console.log (document.querySelector(".box").appendChild(btn));
// div.append(btn);


//createTextNode
btn = document.createElement("button");
btn.appendChild(document.createTextNode("Submit"));
console.log(document.querySelector(".box").appendChild(btn));
btn.style.backgroundColor = "green"; btn.style.margin = "10px"

///createTextNode

let log = document.createElement("button");
log.appendChild(document.createTextNode("Login"));
console.log(document.querySelector(".box").appendChild(log));


//add heading thr prepend()
let newHead = document.createElement("h1");
newHead.innerHTML = "My New Heading";
console.log(document.querySelector("body").prepend(newHead))

// practic... create button thrw js add as 1st element of body whuch have bg red and color white
let click = document.createElement("button");
click.innerHTML = "Click Me!";
console.log(document.querySelector("body").prepend(click));
click.style.backgroundColor = "green"; click.style.margin = "10px";
click.style.color = "white"; click.style.padding = "10px";


// css on para using classlist
let parag = document.querySelector("p");
// parag.setAttribute("class", "para1");
parag.classList.add("para1");
console.log(parag);