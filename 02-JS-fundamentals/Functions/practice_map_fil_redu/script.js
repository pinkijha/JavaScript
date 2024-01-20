const user = [
    { firstName: 'Pinki', lastName: 'Jha', age: 26 }, { firstName: 'Priyanka', lastName: 'Chopra', age: 36 },
    { firstName: 'Rinku', lastName: 'Jha', age: 36 }, { firstName: 'Swati', lastName: 'Kadam', age: 26 }];

    // list of fullname 
    // [pinki, jha]

    // let fullName = user.map((element) => console.log(`${element.firstName} ${element.lastName}`));


    // find the num of same age
    let sameAge = user.reduce((acc, curr) => {
        if ( acc[curr.age]){
            acc[curr.age]++;
        }
        else{
            acc[curr.age] = 1;
        }
        
    return acc;

    }, {});
    // console.log(sameAge);


    // find the name whose age is less than 30
    let output = user.filter(x => x.age < 30).map(x => x.firstName);
    // console.log(output);


    
    // find the name whose age is less than 30 using reduce

    let name = user.reduce((acc, curr) => {
        return (curr.age < 30 && !acc) ? curr.name : acc;  
    });
    
    // console.log(name);

    let result = 2009 ;
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

    'use strict';
    result = "1" == 1;
    // console.log(result);

    let value = new Set([1, 1, 2, 3, 2, 3]);
    result = [...value];
    // console.log(result);

    const getA = () => 1;
    const getB = () => 2;
    const getC = () => 3;
    result = (getA(), getB(), getC());
    // console.log(result);

    const array =[ 10, 15, 20, 30, 40];
    result = array.find( v => v > 15);
    // console.log(result);

    array.forEach((n,i,array) => {
        console.log(n,i,array);
    })