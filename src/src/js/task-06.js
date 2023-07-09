"use strict"

const inputElement=document.querySelector("#validation-input");
// console.log(inputElement);

inputElement.addEventListener("blur", (event) => {

        const length = inputElement.getAttribute("data-length");
        // console.log(length);
        const value = event.currentTarget.value.length;


        if (value === Number(length)) {
            inputElement.classList.remove("invalid");
            inputElement.classList.add("valid");
        }
        else {
            inputElement.classList.remove("valid");
            inputElement.classList.add("invalid");
        }
    });

console.log(length);

