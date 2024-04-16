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