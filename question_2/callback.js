const resolvedPromise = () =>
    new Promise ((resolve, reject) => {
        setTimeout(resolve({message: "Delayed Success!" }), 500);

    });


const rejectPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(reject({error: "Delayed Exception!" }), 500);

    });


resolvedPromise().then((message) => console.log(message));
rejectPromise().catch((message) => console.log(message));



