const burgerEl = document.querySelector(".burger-button")
const closeBtnEl = document.querySelector(".mobile-menu-close-btn")
const mobMenuEl = document.querySelector(".mobile-menu")
const bodyEl = document.body;

burgerEl.addEventListener('click', toggleModal) 
closeBtnEl.addEventListener('click', toggleModal)

function toggleModal() {
    mobMenuEl.classList.toggle("is-open")

     if (mobMenuEl.classList.contains('is-open')) {
    bodyEl.style.overflow = 'hidden';
  } else {
    bodyEl.style.overflow = 'visible';
  }
}

