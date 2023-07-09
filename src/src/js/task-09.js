function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor=document.querySelector(".change-color");
const spanColor=document.querySelector(".color");

changeColor.addEventListener("click",() =>
{
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanColor.textContent=color;
});