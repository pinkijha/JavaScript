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
    for ( let i = 0; i < str.length; i++){
       if ( str[i] === 'a'|| str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' ){

          
           count++;

       }
    }
    return count;
}
const inputString = "RINKU JHA";
console.log(`Number of vowel in "${inputString}" : `, countVowel(inputString));
