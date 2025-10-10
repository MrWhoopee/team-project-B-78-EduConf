const registerEl = document.querySelector(".register-labels-wrapper .big-blue-btn")
const closeBtnEl = document.querySelector(".succes-close-btn")
const modalEl = document.querySelector(".backdrop-success")
const bodyEl = document.body;


registerEl.addEventListener('click', toggleModal) 
closeBtnEl.addEventListener('click', toggleModal)

function toggleModal() {
    modalEl.classList.toggle("is-open-now")

     if (modalEl.classList.contains('is-open-now')) {
    bodyEl.style.overflow = 'hidden';
  } else {
    bodyEl.style.overflow = 'visible';
  }
}

