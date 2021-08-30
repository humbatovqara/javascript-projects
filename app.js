// document.querySelector()
// addEventListener()
// classList.toggle()
// contains()
// romeve()
// add()
// toggle()

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function() {

    // Methot 1
    /*
    if (links.classList.contains('show-links')) {
        links.classList.remove('show-links');
    }
    else {
        links.classList.add('show-links');
    }
    */

    // Method 2
    links.classList.toggle('show-links');
});