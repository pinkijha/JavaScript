const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("p1 Success");
        reject("p1 Fail");
    }, 3000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("p2 Success");
        reject("p2 Fail");
    }, 2000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("p3 Success");
        reject("p3 Fail");
    }, 1000);
});

//promise all
/* Promise.all([p1, p2, p3])
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.error(err);
}) */

//promise any
/* Promise.any([p1, p2, p3])
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.error(err);
}) */

//promise allSettled
/* Promise.allSettled([p1, p2, p3])
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.error(err);
}) */

// promise race
Promise.race([p1, p2, p3])
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.error(err);
})