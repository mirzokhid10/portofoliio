"strict mode";

const ptmodal = document.querySelector(".simple-modal");
const project1 = document.querySelector(".project-1");
const project2 = document.querySelector(".project-2");
const project3 = document.querySelector(".project-3");
const project4 = document.querySelector(".project-4");
const project5 = document.querySelector(".project-5");
const project6 = document.querySelector(".project-6");
const project7 = document.querySelector(".project-7");
const project8 = document.querySelector(".project-8");
const project9 = document.querySelector(".project-9");

const closeButton = document.querySelector(".close-button");

function toggleModal() {
  ptmodal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === ptmodal) {
    toggleModal();
  }
}

project1.addEventListener("click", toggleModal);
project2.addEventListener("click", toggleModal);
project3.addEventListener("click", toggleModal);
project4.addEventListener("click", toggleModal);
project5.addEventListener("click", toggleModal);
project6.addEventListener("click", toggleModal);
project7.addEventListener("click", toggleModal);
project8.addEventListener("click", toggleModal);
project9.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

/*youtube*/
/*
const ytbModel = document.querySelector(".youtube-modal");
const youtube = document.querySelector(".youtube");
const ytbCloseBtn = document.querySelector(".close-button");

function toggleModal() {
  ytbModel.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === ytbModel) {
    toggleModal();
  }
}

youtube.addEventListener("click", toggleModal);
ytbCloseBtn.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick); */
/*youtube*/

/*logo modal*/
