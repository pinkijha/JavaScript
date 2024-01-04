const user = [
    { firstName: 'Pinki', lastName: 'Jha', age: 26 }, { firstName: 'Priyanka', lastName: 'Chopra', age: 36 },
    { firstName: 'Rinku', lastName: 'Jha', age: 36 }, { firstName: 'Swati', lastName: 'Kadam', age: 26 }];

    // list of fullname 
    // [pinki, jha]

    let fullName = user.map((element) => console.log(`${element.firstName} ${element.lastName}`));


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
    console.log(sameAge);


    // find the name whose age is less than 30
    let output = user.filter(x => x.age < 30).map(x => x.firstName);
    console.log(output);


    
    // find the name whose age is less than 30 using reduce

    let name = user.reduce((acc, curr) => {
        return (curr.age < 30 && !acc) ? curr.name : acc;  
    });
    
    console.log(name);

    