const rulesBtn = document.querySelector(".rules-btn");
const closeBtn = document.querySelector(".close-btn");
const rulesScreen = document.querySelector(".modal");

rulesBtn.addEventListener("click", ()=>{
    rulesScreen.classList.toggle("show-modal");
});

closeBtn.addEventListener("click", ()=>{
    rulesScreen.classList.toggle("show-modal");
});