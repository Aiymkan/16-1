
const numberInput = document.querySelector("#numberInput");
const numberCheck = document.querySelector(".numberCheck");
const numberResult = document.querySelector('.numberResult');

const numberRegExp = /^1|0\d{13}$/;

numberCheck.addEventListener('click', () => {
    if (numberRegExp.test (numberInput.value)) {
        numberResult.innerText = "right";
        numberResult.style.color = "green";
    } else {
        numberResult.innerText = "error";
        numberResult.style.color =" red";
    }
})



const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

let position = 0
child.addEventListener ('click', () => {
    position ++;
    child.style.left= position + 'px'

});









