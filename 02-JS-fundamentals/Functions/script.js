/* // simple function
function findVowel (str){
    str = str.toLowerCase();
    let count = 0;
     for ( let i = 0; i < str.length; i++){
        if ( str[i] === 'a'|| str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' ){

           
            count++;

        }
     }
     return count;
}

const inputString = "shailesh thakur";
console.log(`Number of vowel in "${inputString}" : `, findVowel(inputString)); */

// arrow function

const countVowel = (str) => {
    str = str.toLowerCase();
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {


            count++;

        }
    }
    return count;
}
const inputString = "RINKU JHA";
// console.log(`Number of vowel in "${inputString}" : `, countVowel(inputString));



/*  practice questions 
    we are give array of marks of students . filter our of the marks of students that scored 90 */

let studentScore = [{ name: 'pinki', surname: 'jha', marks: 99 },
{ name: 'shailesh', surname: 'thakur', marks: 89 },
{ name: 'swati', surname: 'kadam', marks: 79 },
{ name: 'santoshi', surname: 'jha', marks: 98 },
{ name: 'sakshi', surname: 'jha', marks: 93 },
];

let newScore = studentScore.filter(item => item.marks > 90);
// console.log(newScore);


/*  practice questions 
    take a number n as input from user . create an array of numbers from 1 to n.
    use the reduce method to calculate the sum of all numbers in the array
    use the reduce method to calculate the product of all numbers in the array */

let n = prompt('enter number')
let arr = [];
for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
   
}
console.log(arr);
let sum = arr.reduce((accu, curr) => { return accu + curr });
let product = arr.reduce((accu, curr) => { return accu * curr });

console.log(`sum of array is : ${sum} && product of array is : ${product}`);