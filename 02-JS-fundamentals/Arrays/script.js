/* const array = [1, 2, 3];
const result = array.join();
console.log(result); */

/* let text = "ECMAScript";
const result = text.charAt(1);
console.log(result); */

/* const value = Math.PI;
const result = Math.ceil(value);
console.log(result); */

/* const str = "JavaScript";
const result = str.replace(/a/g, "e");
console.log(result); */

/* const array = [1, 2, 3];
const result = array instanceof Array;
console.log(result); */

/* let numbers = [262, 2009, 95];
let [first, second, third ] = numbers;
const result = second;
console.log(result); */

/* const a = [1, 2, 3, 4, 5];
const sliced = a.slice(1, a.length - 1);
const result = sliced.join("");
console.log(result); */


/* const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
console.log(plants);
// Expected output: "tomato" */

/* const number =12.3456;
const result = number.toPrecision(2);
console.log(result); */

/* const result = "ECMAScript".slice(1, -1);
console.log(result); */

/* const result =true + true;
console.log(result); //output will be 2(bolean converted into a number) */

/* const str = "JavaScript";
const substr = str.substr(1 ,4);
const substring = str.substring(1, 4);
const result = substr.indexOf(substring);
console.log(result); */

/* const a = [1,2,3,4,5];
const result = a.push(6) - a.pop();
console.log(result); */

/* const check = (value) => value === 2;
const result = [1, 2, 3].every(check);
console.log(result); */


/* const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];

// Merge the second array into the first one
vegetables.push(moreVegs);

console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot'] */


const array = [15, 16, 17, 18, 19];
function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

array.reduce(reducer);
