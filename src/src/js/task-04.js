let counter = 0
const value = document.querySelector('#value')
const buttonMinus = document.querySelector('button[data-action="decrement"]')
const buttonPlus = document.querySelector('button[data-action="increment"]')

buttonMinus.addEventListener('click', () => {
    counter--
    value.textContent = counter
})

buttonPlus.addEventListener('click', () => {
    counter++
    value.textContent = counter
}) 