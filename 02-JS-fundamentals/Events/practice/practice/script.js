/* let modebtn = document.querySelector("#mode");

let currMode = 'light'; //dark
modebtn.addEventListener("click", () => {
    if (currMode === 'light'){
        currMode = 'dark';
        document.querySelector('body').style.backgroundColor = 'black';
    }
    else{
        currMode = 'light';
        document.querySelector('body').style.backgroundColor = 'white';
    }
    // console.log(currMode);

}) */

// light on|off
/* 
let light = document.querySelector("#mode");
let switchs = 'on';

light.addEventListener("click", () => {

    let image = document.createElement("img");
    // image.innerHTML = "<img src='pic_bulboff.gif'>";
    image.setAttribute("src", "pic_bulboff.gif")
    image.appendChild(document.createTextNode(""))



    if( switchs === 'on') {
        // switchs = 'off'


    }
    else{
        switchs = 'on';
    }
    console.log(switchs)
}) */




// click on img for light on and off
let image = document.querySelector("#img");

image.addEventListener("click", () =>
{
    if (image.src.match('bulbon')){
        image.src = "pic_bulboff.gif";

    }
    else{
        image.src = "pic_bulbon.gif";
    }
})

//using normal function
function changeImage(){
    image = document.getElementById('img');
    if (image.src.match('bulbon')){
        image.src = "pic_bulboff.gif";

    }
    else{
        image.src = "pic_bulbon.gif";
    }
}


