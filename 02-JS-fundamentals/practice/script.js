

//use strict mode

/* 'use strict';

let education = false;
let job = true;

if (job) educations = true;
if (education) console.log(`you will get the job.`); */



/* //functions 
 function fruitProcessor (apple,orange){
    // console.log(apple,orange);
    const juice = `${apple} juice &  ${orange} juice`;
    return juice;
 }
// const appleJuice = fruitProcessor(8,9);
// console.log(appleJuice);

console.log(fruitProcessor(20,30)); */


//function declaration & function expression


/* function employee (name, surName){
   
    const emp = `The name is ${name} with ${surName} surname`;
    return emp;
    
}
const userName = employee ('pinki','jha');
console.log(userName); */

// Arrow function

/* const emp = (eName, eLname) => console.log(eName, eLname);
emp('pinki', 'jha'); */

/* const birtYear = 1995;
const myAge = birtYear => 2037 - birtYear;

console.log(myAge); */

//retirement
/* const retirement = birthYear =>{
    const currentAge = 2023 - birthYear;
    const retirementAge = 60 - currentAge; */
/*     if (currentAge >= 60){
        console.log(`your current age is ${currentAge} you have wait more ${retirementAge}`);
    }
    else{
        console.log(`you retired !`);
    } */
    /* console.log(retirementAge);
}
retirement(1995); */


///calling function in function

/* function vehicleBrand(brandName){
    return brandName;
}

const vehicle = function (fourWheeler, twoWheeler){
    const fourWheelerBrand = vehicleBrand(fourWheeler);
    const twoWheelerBrand = vehicleBrand(twoWheeler);
 const ownerName = `pinki have both ${fourWheeler} and ${twoWheeler} `;
 return ownerName;
}
console.log(vehicle('mercedese', 'bullet')); */


/* const newArr = ['pinki', 'jha', 'shailesh', 'thakur'];
const newArr1 = ['pinki', 'jha', 'shailesh', 'thakur','love'];
console.log(newArr);
console.log(newArr1);
newArr.length; */

//array with for loop

/* const cityName = ['mumbai', 'delhi', 'bagnlore', 'pune', 'goa', 'mysore'];

console.log(cityName); */



//using forloop

// const familyMemebers = ['papa', 'mummy', 'hubby', 'sister', 'childrens', 'in-laws' ];

/* for(let i = 0; i < familyMemebers.length; i++){
    console.log(familyMemebers[i]);
} */

//for of loop

/* for ( mName of familyMemebers){
    console.log(mName.toLowerCase());
}



const cityName = ['mumbai', 'delhi', 'bagnlore', 'pune', 'goa', 'mysore'];
for ( city of cityName)
console.log(city.toUpperCase()); */

// using for off loop

/* let prices = [250, 400, 600, 700, 800, 1000];

let i = 0;
for( let val of prices){
    console.log(`value at index ${i} = price before offer : ${val}`);
    let offer = val / 10;
    prices[i] = prices[i] - offer;
    console.log(`value at index ${i} = price after offer : ${prices[i]}`)
    i++;
} */

// using for loop
/* let prices = [250, 400, 600, 700, 800, 1000];
console.log(`price before offer : ${prices}`);
for (let i=0; i<prices.length; i++){
    let offer = prices[i] / 10;
    prices[i] = prices[i] - offer;
}

console.log(`price after offer : ${prices}`); */

/* const array = [1, 2, 3];
array.concat(4, 5, 6);
const result = array;
console.log(result); */

/* const result = Math.sqrt(4);
console.log(result); */

/* const array =[1, 2, 3];
debugger;
const copy = array.reverse();
const result = copy === array;
console.log(result); */

/* const array = [1, 4, 9];
const result = 0 in array;
console.log(result); */

/* const a = [1, 2, 3, 4, 5];
const result = a.shift() - a.pop();
console.log(result); */

/* let value = 2009;
if (value > 1){
    let value = 262;
}
const result = value;
console.log(result); */

/* const resulr = 1.2e3;
console.log(resulr); */

/* const value = 2009;
const result = eval("value + value");
console.log(result); */

/* const check = (value) => value === 5;
const result = [1, 2, 3].some(check);
console.log(result); */



