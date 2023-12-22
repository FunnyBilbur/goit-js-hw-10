import iziToast from "izitoast";
const form = document.querySelector('.form');
const input_delay = document.querySelector('.input__delay');
const input_fulfilled = document.querySelector('.input__fulfilled');

form.addEventListener('submit', (arg) => {
    arg.preventDefault();
    const delay_ms = input_delay.value;
    console.log('Submitted');
    if (input_fulfilled.checked) {
        makePromise({ shouldResolve: true, delay: delay_ms })
            .then(result => console.log(result))
            .catch(error => console.error(error));
    } else {
        makePromise({ shouldResolve: false, delay: delay_ms })
            .then(result => console.log(result))
            .catch(error => console.error(error));
    }
});

const makePromise = ({ shouldResolve, delay }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldResolve) {
                resolve(`✅ Fulfilled promise in ${delay}ms`);
                iziToast.show({
                    titleColor: 'white',
                    position: 'topRight',
                    message: `✅ Fulfilled promise in ${delay}ms`,
                    messageColor: 'white',
                    backgroundColor: '#59A10D',
                    progressBarColor: '#B5EA7C'
                });
            } else {
                reject(`❌ Rejected promise in ${delay}ms`);
                iziToast.show({
                    titleColor: 'white',
                    position: 'topRight',
                    message: `❌ Rejected promise in ${delay}ms`,
                    messageColor: 'white',
                    backgroundColor: '#EF4040',
                    progressBarColor: '#B51B1B'
                });
            }
        }, delay);
    });
};