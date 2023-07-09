
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'Notiflix';

const bstart = document.querySelector("button[data-start]");
const seconds = document.querySelector('span[data-seconds]');
const minutes = document.querySelector('span[data-minutes]');
const hours = document.querySelector('span[data-hours]');
const days = document.querySelector('span[data-days]');
const text = document.querySelector('#datetime-picker')

let selectedDates = null;
let countdown = null;

bstart.disabled=false;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0]<= new Date())
      {
        Notiflix.Notify.failure('We have to go Back to the Future!');
        bstart.disabled=true;
      }
      else
      {
        bstart.disabled=false;
      }
    },
  };

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

  flatpickr(text,options);

  function addLeadingZero(value) {
    return value.toString().padStart(2, "0");
}


bstart.addEventListener('click', () => {
    let timer = setInterval(() => {
      let countdown = new Date(text.value) - new Date();
      bstart.disabled = true;
      if (countdown >= 0) {
        let timeObject = convertMs(countdown);
        days.textContent = addLeadingZero(timeObject.days);
        hours.textContent = addLeadingZero(timeObject.hours);
        minutes.textContent = addLeadingZero(timeObject.minutes);
        seconds.textContent = addLeadingZero(timeObject.seconds);
      }
    }, 1000);
  });