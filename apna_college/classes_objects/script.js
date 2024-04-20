const emp ={
    name: "pinki",
    experience(){
        console.log("3+ years ")
    }
}; 
const emp2 = {
    name: "ravi",
    experience(){
        console.log("5+ years ")
    }
};
emp2.__proto__=emp;

//assignment 1

let data = "data is secrete";
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data=", data)
    }

}

let student = new User("pinki", "pinki@gmail.com");
let student1 = new User("pinki", "pinki@gmail.com");
let student2 = new User("pinki", "pinki@gmail.com");

//assignment 2

class Admin extends User{
    constructor(name, email){
        super(name,email);
    }
    editData(){
        data = "edit with new value";
    }
}

let admin = new Admin("piku", "piku@gmail.com");