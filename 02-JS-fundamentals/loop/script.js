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

let sum = 0;
for ( let num = 1; num <= 50; num++){
   
    sum = sum + num;

}

console.log(`sum of 1 to 50 numbers are: ${sum}`);

