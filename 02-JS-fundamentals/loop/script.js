// *****Basic Looping: Write a for loop that prints numbers from 1 to 10 *****

/* for (let i = 1; i <= 10; i++ ){
    console.log(i);
} */



// Reverse Looping: Write a for loop that prints numbers from 10 to 1.

/* for ( let rev = 10; rev >= 1; rev--){
    console.log(rev);
} */



// Even Numbers: Write a for loop that prints all even numbers between 1 and 20.

/* for (let even = 2; even <=20; even++){
    if (even % 2 == 0){
        console.log(`even number from 2 to 20:  ${even}`);
    }
} */



// Odd Numbers: Write a for loop that prints all odd numbers between 30 and 50.

/* for ( let num = 30; num <= 50; num++){

    if ( num % 2 != 0 ){
        console.log(`Odd numbers from 30 to 50: ${num}`)
    }
} */


// Sum of Numbers: Write a for loop to calculate the sum of all numbers from 1 to 50.

/* let sum = 0;
for ( let num = 1; num <= 50; num++){   
    sum = sum + num;
}
console.log(`sum of 1 to 50 numbers are: ${sum}`); */


// Array Iteration: Given an array [10, 20, 30, 40, 50], use a for loop to print each element in the array.

/* const arry = [10, 20, 30, 40, 50];

for (let num = 0; num < arry.length; num++){
    
console.log(`index of ${num} : ${arry[num]}`);
} */


// Nested Loop: Create a multiplication table using nested for loops. For example, a 3x3 multiplication table would look like:
// 1 2 3
// 2 4 6
// 3 6 9

/* for ( let i=1 ; i<=5; i++ ){
    let line = ' '; 
    for ( j=1; j<=4; j++){
        let result = i*j;
        // console.log(result);
        line += result + ' ';

    }
    console.log(line); 
    
} */


/* // Start pattern

for ( let i=1 ; i<=6; i++){
    let line = '';
    for (let j=1; j<=i; j++){
        let star = '*';
        line += star + '';
    }
    console.log(line);
} */


//Object Iteration: Given an object { name: 'John', age: 30, city: 'New York' }, use a for loop to print each key-value pair.

/* // using for of loop
const empData = {
    name: 'John',
    age: 30,
    city: 'New York'
}
for (let [key, value] of Object.entries(empData)){
    console.log(`${key}: ${value}`);
} */


/* // using for in loop
const empDetails = {
    name: 'John',
    age: 30,
    city: 'New York'
}

for (let key in empDetails) {
    if (empDetails.hasOwnProperty(key)) { // Check if the property belongs directly to the object
        console.log(`${key}: ${empDetails[key]}`);
    }
} */

// Fibonacci Series: Write a for loop to generate the first 10 numbers in the Fibonacci sequence.

let num1 = 0;
let num2 = 1;
let nextNum;

console.log(num1);
for (let i = 1; i<=10; i++){
    console.log(num2);
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;

}