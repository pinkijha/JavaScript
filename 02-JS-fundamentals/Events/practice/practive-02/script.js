
/* //1 way
document.getElementById("wada").onclick = function(){
    alert("wada pav is famous dish for mumbai!");
}

//2nd way use addEventlistner
document.getElementById("wada1").addEventListener("click", function(ab){
    // alert("I like wada pav👌");
    console.log("you clicked on wadapav");
     ab.stopPropagation();
});

document.getElementById('img-gallery').addEventListener("click", function(ab){
    console.log("you clicked on ul");
});

document.getElementById("mdn").addEventListener("click", function(e){
e.preventDefault();
e.stopPropagation();
console.log("Youe click On mdn");
}) */

// in prev also use attachEvent & onEvent for old browsers


/// hide the image when you click on image
let image = document.getElementById("img-gallery").addEventListener("click", function(e){
console.log(e.target.parentNode);
image = e.target.tagName;
console.log(image);
if(image === 'IMG'){
    console.log(image.id);
    let removeIt = e.target.parentNode;
    removeIt.remove();
}


})