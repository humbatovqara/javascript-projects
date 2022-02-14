let count = 0;

const counterNumber = document.querySelector(".counterNumber");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;

        if (styles.contains("decrease")) {
            count--;
        }
        else if (styles.contains("increase")) {
            count++;
        }
        else {
            count = 0;
        }

        if(count > 0) {
            counterNumber.style.color = "green";
        }
        if(count < 0) {
            counterNumber.style.color = "red";
        }
        if(count == 0) {
            counterNumber.style.color = "#222";
        }

        counterNumber.textContent = count;
    });
});