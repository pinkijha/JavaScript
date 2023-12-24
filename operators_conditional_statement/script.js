//divisible by 5 or not

/* let number = prompt('enter any number');

if (number%5==0){
    
console.log('the', number, ' is divisible by 5');

}
else{
    console.log(number, ' is not divisible by 5');

} */


// Get user input for the score
let scoreInput=prompt("please enter your numeric score");

// Convert the user input to a number
let score = parseFloat(scoreInput);

// Check if the user input is a valid number
if (isNaN(score)) {
    console.log("Invalid input. Please enter a numeric score.");
  } else
switch(true){
    case score>=80:
       {
            console.log('congratulation! your grade is A');
        }
        break;

        case score>=70:
        {
            console.log('congratulation! your grade is B');
        }
        break;
        case score>=60:
        {
            console.log('congratulation! your grade is C');
        }
        break;
        case score>=50:
        {
            console.log('congratulation! your grade is D');
        }
        break;
        case score>=0:
        {
            console.log('sorry! Try next time');
        }
}



/* let score = prompt("Enter your Score");
let grade;

if(score >= 80){
    console.log("Congratulations!, you grade is A");
}

else if(score >= 70){
    console.log("Congratulations!, you grade is B");
}

else if(score >= 60){
    console.log("Congratulations!, you grade is C");
}

else if(score >= 45){
    console.log("Congratulations!, you grade is D");
}

else{
    console.log("You Failed, Better Luck Next time");
}
 */

















/* let a=3;
// let b=2;
console.log('a=',a**a);
document.write('a=', a**a); */

/* let color='black';
let mode;
if(color==='black' ){

    mode='darkmode'

}

    console.log(mode); */