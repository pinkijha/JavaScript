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

//assignment
class User{

    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data is secrete")
    }

}

let student = new User("pinki", "pinki@gmail.com");
let student1 = new User("pinki", "pinki@gmail.com");
let student2 = new User("pinki", "pinki@gmail.com");
