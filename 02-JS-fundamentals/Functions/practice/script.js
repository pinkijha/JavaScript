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
console.log(newArrys)

