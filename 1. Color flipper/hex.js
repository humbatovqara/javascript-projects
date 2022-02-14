const colorName = document.querySelector(".colorName");
const changeBtn = document.querySelector("#changeBtn");

const color = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
let newColor = "";

changeBtn.addEventListener("click", function () {
    for (let i = 0; i < 6; i++) {
        newColor += color[randomNumber()];
    }

    document.body.style.backgroundColor = "#" + newColor;
    colorName.textContent = "#" + newColor;

    newColor = "";
});

function randomNumber() {
    return Math.floor(Math.random() * color.length);
}