const cart = ["kurti", "lehnga", "saree", "tshirt"];

const promise = createOrder(cart); //orderId
promise
.then(function(orderId){
    console.log(orderId);
    return orderId;
})
.then(function(orderId){
    return proceedToPayment(orderId)
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){
    console.log(err.message);
})

//producer
function createOrder(cart){
    const pr = new Promise(function (resolve, reject){
        //vaidate card
        if(!validateCart(cart)){
            const err = new Error("The cart is not valid");
            reject(err);
        }

        //logic for createId
        const orderId = "123456";
        if(orderId){
            setTimeout(function(){
                resolve(orderId); 
            }, 5000)
             
        }
    });

    return pr;
}
    
function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        resolve("payment successful");
    })
}
function validateCart(cart){
    return true;
}