"use strict"

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () =>{
    if(nameInput.value==="")
    {
        nameOutput.textContent="Anonymus";
    }
    else
    {
        nameOutput.textContent=nameInput.value;
    }
    });
