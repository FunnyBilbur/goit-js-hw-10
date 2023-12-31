import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";

const BtnStart = document.querySelector('button');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

let intervalId;
let userSelectedDate;
let differanceBeetWeenTime;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0];
        if (userSelectedDate.getTime() > Date.parse(new Date())) {
            // window.alert('Correct');
            BtnStart.disabled = false;
        }
        else {
            BtnStart.disabled = true;
            iziToast.show({
                title: 'Error',
                titleColor: 'white',
                position: 'topRight',
                message: 'Please choose a date in the future',
                messageColor: 'white',
                backgroundColor: '#EF4040',
                progressBarColor: '#B51B1B'
            });
        }
        days.innerText = "00";
        hours.innerText = "00";
        minutes.innerText = "00";
        seconds.innerText = "00";
        clearInterval(intervalId);
    },
};

const myInput = document.querySelector("#datetime-picker");
flatpickr(myInput, options);  // flatpickr

BtnStart.addEventListener('click', () => {
    intervalId = setInterval(() => {
        differanceBeetWeenTime = userSelectedDate.getTime() - Date.parse(new Date());
        const DateObj = convertMs(differanceBeetWeenTime);
        // console.log('Differ is ', differanceBeetWeenTime);
        console.log('Differ is ', DateObj);
        days.innerText = DateObj.days.toString().padStart(2, "0");
        hours.innerText = DateObj.hours.toString().padStart(2, "0");
        minutes.innerText = DateObj.minutes.toString().padStart(2, "0");
        seconds.innerText = DateObj.seconds.toString().padStart(2, "0");
        if (differanceBeetWeenTime === 0) {
            clearInterval(intervalId);
        }
    }, 1000);
    BtnStart.disabled = true;
});

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
}
