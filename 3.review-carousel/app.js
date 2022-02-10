// local reviews data
const reviews = [{
        id: 1,
        name: "Qara Hümbətov",
        job: "Frontend Developer",
        img: "https://images.unsplash.com/photo-1629753736074-93a7d71bd48d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80",
        text: "Qara Hümbətov - Frontend Developer - Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus possimus, dolorum, dignissimos sed, iure nostrum id cum vel reiciendis quas sapiente consectetur! Accusantium consectetur hic alias est tempore veritatis molestiae."
    },
    {
        id: 2,
        name: "Nurlan Ramazanov",
        job: "Backend Developer",
        img: "https://images.unsplash.com/photo-1629793456378-b2e71e6114b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        text: "Nurlan Ramazanov - Backend Developer - Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus possimus, dolorum, dignissimos sed, iure nostrum id cum vel reiciendis quas sapiente consectetur! Accusantium consectetur hic alias est tempore veritatis molestiae."
    },
    {
        id: 3,
        name: "Ülvi Rəfizadə",
        job: "Fullstack Web Developer",
        img: "https://images.unsplash.com/photo-1629664198111-04d9a60d65c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        text: "Ülvi Rəfizadə - Fullstack Web Developer - Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus possimus, dolorum, dignissimos sed, iure nostrum id cum vel reiciendis quas sapiente consectetur! Accusantium consectetur hic alias est tempore veritatis molestiae."
    },
    {
        id: 4,
        name: "Təbriz Osmanlı",
        job: "Helpdesk Technician",
        img: "https://images.unsplash.com/photo-1629740081942-29c155e9aeb3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        text: "Təbriz Osmanlı - Helpdesk Technician - Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus possimus, dolorum, dignissimos sed, iure nostrum id cum vel reiciendis quas sapiente consectetur! Accusantium consectetur hic alias est tempore veritatis molestiae."
    }
]

// select items
const img = document.getElementById("personImg");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const randomBtn = document.querySelector(".randomBtn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
    showPerson();
});

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

nextBtn.addEventListener("click", function() {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

prevBtn.addEventListener("click", function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

randomBtn.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
});