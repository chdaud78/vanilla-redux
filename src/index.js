
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const number = document.querySelector(".number");


let count = 0;
number.innerText = count;

const updateText = () => {
    number.innerText = count;
}

const handlePlus = () => {
    count++;
    updateText();
}

const handleMinus = () => {
    count--;
    updateText();
}

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);