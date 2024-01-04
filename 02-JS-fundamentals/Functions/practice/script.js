// foreach loop
/* arr =[1, 2, 3, 4, 5, 6];
arr.forEach(element => {
    console.log(element);
}); 

arr.forEach(function val(element){
    console.log(element);
}); */

/* arr = ['pinki', 'jha'];

arr.forEach ((val, i) => {
    console.log(val.toUpperCase(), i);
}); */

/* const arr =['khushboo','shailesh'];
arr.forEach((val, ind) => {
    console.log(val.toUpperCase(), ind);
}) */

let arr = [2, 4, 5, 6, 7, 8, 9];
arr.forEach ((val, index, arr) => {
    // console.log(val * val);
})

const join = ['pinki_jha', 'shailesh_thakur'];
let joinIt = join.join('');
// console.log(joinIt);


//map aaray function (higher order function)

const arry = [1, 2, 3, 4, 5, 6];
let newArrys = arry.map((element) => element*2);
// console.log(newArrys)

// return function multi by 2 
function double(x){
    return x*2;
}

// return function multi by 3 
function triple (x){
    return x*3;
}

// return binary function
function binary(x){
    return x.toString(2);
}
let output = arry.map(binary);
// console.log(output);



//filter aaray function (higher order function)

let arrys = [1, 2, 3, 4, 5, 6];
 function odd(){
     for (let i = 0; i<arrys.length; i++){
        if (i%2 !== 0){
           console.log(i);           
        }
     }
     console.log(`\n`);
 }

/*  let outputs = arrys.filter(odd);
 console.log(outputs); */

 // simple way
 function isOdd(x){
    return x % 2;
 }
 /* let outputs = arrys.filter(isOdd);
 console.log(outputs); */

 // another example
 function isEven(x){
    return x % 2 === 0;
 }
 /* let outputs = arrys.filter(isEven);
 console.log(outputs); */

 // another example number greater
/* let  outputs = arrys.filter((x) => x > 3);
console.log(outputs); */

/*  function isGreater(x){
    return x > 4;
 }
 let outputs = arrys.filter(isGreater);
 console.log(outputs); */


 // reduce aaray function (higher order function)

 //normal way to do summ of array
 arrys = [1, 2, 3, 4, 5, 6000, 40, 600, 1000];
function sumOf (){
    sum = 0;
    for (let i = 0; i < arrys.length; i++){
        sum = sum + arrys[i];
    }
    // console.log(`sum of [1, 2, 3, 4, 5, 6] is:  ${sum}`);
}
sumOf();

//using reduce function
let sumOfArr = arrys.reduce ((acc, curr) => 
acc = acc + curr);
// console.log(sumOfArr);

// find greater number using reduce
let findMax = arrys.reduce((acc, curr) => {
if ( acc > curr){
    return acc;
}
else{
    return curr;
}
});
console.log(findMax);



