const user = [
    { firstName: 'Pinki', lastName: 'Jha', age: 26 }, { firstName: 'Priyanka', lastName: 'Chopra', age: 36 },
    { firstName: 'Rinku', lastName: 'Jha', age: 36 }, { firstName: 'Swati', lastName: 'Kadam', age: 26 }];

// list of fullname 
// [pinki, jha]

// let fullName = user.map((element) => console.log(`${element.firstName} ${element.lastName}`));


// find the num of same age
let sameAge = user.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age]++;
    }
    else {
        acc[curr.age] = 1;
    }

    return acc;

}, {});
// console.log(sameAge);


// find the name whose age is less than 30 (chaining)
let output = user.filter(x => x.age < 30).map(x => x.firstName);
// console.log(output);



// find the name whose age is less than 30 using reduce

let name = user.reduce((acc, curr) => {
    return (curr.age < 30 && !acc) ? curr.name : acc;
});

// console.log(name);

let result = 2009;
const func = (x = 262) => {
    result = x;
    // console.log(result);
}
func(null);

result = 0 || 1 && 2 || 3;
// console.log(result);

const plus = +0;
const minus = -0;
result = plus === minus;
// console.log(result);

// map array function

let arr1 = ['pinki', 'shailesh', 'jha', 'thakur', 'shailesh thakur'];
arr1 = [{ name: 'pinki', surname: 'jha', profession: 'not working' },
{ name: 'shailesh', surname: 'thakur', profession: 'working' },
{ name: 'teju', surname: 'tambe', profession: 'working' },
{ name: 'swati', surname: 'kadam', profession: 'working' }];

arr1 = [{ productName: 'shop', brand: 'lux', price: 40.00, stock: 'In Stock' },
{ productName: 'heels', brand: 'paragone', price: 600.00, stock: 'out of Stock' },
{ productName: 't-shirt', brand: 'puma', price: 500.00, stock: 'In Stock' },
{ productName: 'watch', brand: 'noise', price: 2490.00, stock: 'out of Stock' },
{ productName: 'perfume', brand: 'lbelavita', price: 1410.00, stock: 'In Stock' }]
//  let arr = arr1.map( val => {
//     console.log(val);

//  })
//  console.log(`\n`);
//  console.log(arr1[0]);

//filter
/* let new_arr = arr1.filter(item => item.profession === 'working');
console.log(new_arr); */

// filter @ reduce
let new_arr = arr1
    .filter(item => item.price < 1000 && item.stock === 'In Stock')
    .reduce((acc, item) => acc + item.price, 0);
// console.log(`total price:  ${new_arr}`);


// find mazimum number using reduce
let arr = [5, 6, 7, 88, 99, 876, 4654, 675];
let newArr = arr.reduce((pre, curr) => {
    return pre > curr? pre: curr;

},arr[0]); 
console.log(newArr);
