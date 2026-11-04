
const btn1 = document.querySelector('.content-btn-group');
const btn2 = document.querySelector('.share-btn-group');
const container = document.querySelector(".main-container-content");

function toggleElements() {
  btn1.classList.toggle('display');
  btn2.classList.toggle('display');
  container.classList.toggle("row-gap-small");
}

// Add the click event to both buttons
btn1.addEventListener('click', toggleElements);
btn2.addEventListener('click', toggleElements);



