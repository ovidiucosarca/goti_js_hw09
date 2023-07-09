const fontSize=document.querySelector("#font-size-control");
const text=document.querySelector("#text");

fontSize.addEventListener("input", (event) =>
{
text.style.fontSize=`${fontSize.value}px`;

});