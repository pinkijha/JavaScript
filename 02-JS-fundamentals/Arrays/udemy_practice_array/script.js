// create array to store cpmapanies-> "bloomberg", "microsoft", "amazon", "google", "IBM", "netflix"

const array = ["bloomberg", "microsoft", "amazon", "google","uber", "IBM", "netflix"];

//remove the 1st company from array

console.log(array.shift(0));
console.log(`new array after removing 1st element:: ${array}`);

// remove uber & Add ola in its place
console.log(array);
array.splice(3, 1, "Ola");
console.log(`new array :: ${array}`);


// Add flipcart at the end
console.log(array);
console.log(array.push('flipcart'));
console.log(array);