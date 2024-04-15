const cart = ["kurti", "lehnga", "saree", "tshirt"];

const promise = createOrder(cart); //orderId
promise.then(function(orderId){
    console.log(orderId);
})
.catch(function(err){
    console.log(err);
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

function validateCart(cart){
    return false;
}