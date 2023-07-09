function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const bstart = document.querySelector('button[data-start]');
const bstop = document.querySelector('button[data-stop]');

let timerId = null;

bstart.addEventListener('click', () => {
  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
    bstart.disabled = true;
  }, 1500);
});

bstop.addEventListener('click', () => {
  clearInterval(timerId);
  bstart.disabled = false;
  bstop.disabled = true;
//   alert('timer stop');
});