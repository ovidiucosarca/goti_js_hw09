
const form=document.querySelector(".login-form");

form.addEventListener("submit", (event)=>
{
    event.preventDefault();
    const{
        elements: {email,password}
    } = event.currentTarget;


if (email.value === "" || password.value === "") {
    return alert("Completeaza campurile gen!");
  }
 const inputs = {
    email: email.value,
    password: password.value,
 }
  console.log(inputs);
  event.currentTarget.reset();
});