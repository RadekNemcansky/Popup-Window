//variables

const modal = document.querySelector(".modal"), //Returns the first matching Element node from document 
  modalContent = document.querySelector(".modal-content"),
  btn = document.querySelector(".btn"),
  close = document.querySelector(".close");

btn.addEventListener("click", openModal); //element.addEventListener("click", myFunction);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

//Open modal

function openModal(e) {
  e.preventDefault();
  modal.style.display = "block"; // object.style.display = value changing the display style of modal, Element is rendered as a block-level element
}

 //Close modal
 
/* function closeModal() {
  modalContent.classList.add("slide-up")
  //this function make sure it goes first 
  
  setTimeout(() => {
    modal.style.display = "none";
    modalContent.classList.remove("slide-up");
  }, 100)

}; */

function closeModal() {
  modalContent.classList.add("slide-up");

  setTimeout(() => {
    modal.style.display = "none";
    modalContent.classList.remove("slide-up");
  }, 500)
}