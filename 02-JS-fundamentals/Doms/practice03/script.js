// using innerHtml
function addLanguage(langName){
    const li = document.createElement('li');
    li.innerHTML = `${langName}`;
    document.querySelector(".language").appendChild(li);
}
addLanguage("Python");
addLanguage("HTML");


// using advance optimization
function addOptimLang(langName){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.language').appendChild(li)
}
addOptimLang('Css');

//edit 
let e = document.querySelector("li:nth-child(1)")
console.log(e);
let newli = document.createElement("li");
newli.textContent = "SpringBoot";
e.replaceWith(newli);

//edit using outerHTML
let ed = document.querySelector("li:last-child");
console.log(ed); 
 ed.outerHTML ="<li>Bootstrap</li>";

 //remove
 let rem = document.querySelector("li:nth-child(2)");
 rem.remove();