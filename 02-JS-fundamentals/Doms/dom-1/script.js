var s = "Tutorials Point"
var employee = {
   name: "Ganesh",
   role: "Manager",
   salary: "5000"
};
Object.keys(employee)
var a = [10, 20, 30];
/* console.log(s);
console.dir(s);
console.dir(employee);
console.log("employee with console.log = ", employee);
console.dir(a);
console.log("a with console.log = ", a);
console.dir("a with console.dir = ", a);
 */

const sentence = 'The quick brown fox jumps over the lazy dog ggg gffd ffff khushboo';

const result = sentence.split(/\s+/).map(char => char.length).filter(length => length % 2 === 0);

 console.log(result);

 const wordsArray = ['The', 'quick', 'brown', 'fox', 'pink'];
// let result1 = wordsArray.map(char => char.length).filter(length => length % 2 === 0);
let  result1 = wordsArray.toString('').replace(/,/g, ' ').replace(/\s/g,'');
 console.log(result1);

