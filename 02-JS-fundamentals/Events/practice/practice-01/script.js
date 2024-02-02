//clickEvents
let btn = document.getElementById("btn");
function clickme(c1){
    document.getElementById("btn");
    alert("Hello");
    let a = 'Pinki';
    // document.write(`Hello ${a}`);     
}

//MouseOver Event
function MouseOverEvent(){
    alert("This is Pinki Jha")
}

//onfocus
function focusevent()  
{  
    document.getElementById("input1").style.backgroundColor=" aqua";  
} 

//Keydown Event
function keydownevent(){
    document.getElementById("input2").style.backgroundColor=" aqua";
    alert("Pressed a key")
}

// Load event
function loadEvents(){
    document.write("pages loaded")
}

//keyupevent
// This event is a keyboard event and executes instructions whenever a key is released after pressing.
var a=0;
var b=0;
var c=0;
function changeBackground() {
    var x=document.getElementById('bg');
    x.style.backgroundColor='rgb('+a+', '+b+', '+c+')'  ;
    a+=100;
    b+=a+50;
    c+=b+70;
    if(a>255) a=a-b;
    if(b>255) b=a;
    if(c>255) c=b;
}

//onmouseover event: 
function onmouseOverEvent(obj){
    obj.innerHTML="hello";
    
}

function onmouseOutEvent(obj){
    obj.innerHTML="How's You?";
    
}

//change color click event

const btn1 = document.querySelector("button");
const div = document.querySelector(".box2");
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn1.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  div.style.backgroundColor = rndCol;
});

 