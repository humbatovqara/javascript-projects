const colors = ["Green", "Red", "rgba(133,122,200)", "#f15025"];

const changeBtn = document.getElementById("changeBtn");
const colorName = document.querySelector(".colorName");

changeBtn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    colorName.textContent = colors[randomNumber];
});

function getRandomNumber () {
    return Math.floor(Math.random() * colors.length);
}