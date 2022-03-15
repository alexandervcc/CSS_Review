var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var sideMenu = document.querySelector(".mobile-nav");

var buttons = document.querySelectorAll(".plan button");
var btnHideModal = document.querySelector(".modal__action--negative");
var toogleBtn = document.querySelector(".toggle-button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    /* backdrop.style.display = "block";
    modal.style.display = "block"; */
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}
const closeModal = () => {
  modal.classList.remove("open");
  backdrop.classList.remove("open");
};

backdrop.addEventListener("click", () => {
  closeModal();
  sideMenu.classList.remove("open");
});

btnHideModal.addEventListener("click", () => {
  closeModal();
});

toogleBtn.addEventListener("click", () => {
  backdrop.classList.add("open");
  sideMenu.classList.add("open");
});
