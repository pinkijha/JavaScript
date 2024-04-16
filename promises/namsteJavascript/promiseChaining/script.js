const cart = ["kurti", "lehnga", "saree", "tshirt"];

/* const promise = createOrder(cart); //orderId
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
} */

 /* assignment
 createOrder,
 proceedToPayment,
 showOrderSummary,
 updateWallet
 */

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
 .then(function(orderId){
    return showOrderSummary(orderId);
 })
 .then(function(orderSumInfo){
    console.log(orderSumInfo);
 })
 .catch(function(err){
     console.log(err.message);
 })
 .then(function(orderId){
    return updateWallet(orderId);
 })
 .then(function(wallet){
   console.log(wallet);
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
 function showOrderSummary(orderId){
    return new Promise(function(resolve, reject){
        resolve("You order tshirt, which is red in color, price is 200rs")
    })
 }

 function updateWallet(){
    return new Promise(function(resolve,reject ){
        resolve("Your wallet empty");
    })
 }
 function validateCart(cart){
     return true;
 }