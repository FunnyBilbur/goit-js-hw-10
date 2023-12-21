const form = document.querySelector('.form');
const input = document.querySelector('.input__delay');
// const input = document.querySelector('.input__delay');
// console.dir(input.textContent);

form.addEventListener('submit', (arg) => {
    arg.preventDefault();
    console.log('Submitted');
    // const delay_value = arg.currentTarget.children[0].children[0].value;
    console.log(input.value);

});
// const makeGreeting = guestName => {
//     if (!guestName) {
//         return Promise.reject("Guest name must not be empty");
//     } else {
//         return Promise.resolve(`Welcome ${guestName}`);
//     }
// };
// makeGreeting("Dmytrii").then(greeting => console.log(greeting)).catch(error => console.error(error));
const makePromise = ({ value, delay, shouldResolve = true }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldResolve) {
                resolve(value);
            } else {
                reject(value);
            }
        }, delay);
    });
};
makePromise({ value: "Some value", delay: 3000 })
    .then(result => console.log(result))
    .catch(error => console.error(error));
makePromise({ value: "A", delay: 1000 })
    .then(value => console.log(value)) // "A"
    .catch(error => console.error(error));
makePromise({ value: "B", delay: 4000 })
    .then(value => console.log(value)) // "B"
    .catch(error => console.error(error));
makePromise({ value: "C", delay: 2000, shouldResolve: false })
    .then(value => console.log(value))
    .catch(error => console.error(error)); // "C"