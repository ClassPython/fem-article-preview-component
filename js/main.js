
// Mobile
const mobileBtnOpen = document.querySelector('.mobile-btn-open');
const mobileBtnClose = document.querySelector('.mobile-btn-close');
const mobileContentContainer = document.querySelector('.content-btn-group');
const mobileShareContainer = document.querySelector('.share-btn-group');

const container = document.querySelector(".main-container-content");

// Desktop
const desktopBtnOpen = document.querySelector('.desktop-btn-open');
// const desktopBtnClose = document.querySelector('.desktop-btn-close');
const desktopShareContainer = document.querySelector('.share-btn-group-desktop');

function toggle(){
  // adjust size of row gap in main-container-content to prevent element from shifting
  container.classList.toggle("row-gap-small");
  mobileContentContainer.classList.toggle("display");
  mobileShareContainer.classList.toggle("display");

  desktopShareContainer.classList.toggle("display");

}


mobileBtnOpen.addEventListener("click", toggle);
mobileBtnClose.addEventListener("click", toggle);

desktopBtnOpen.addEventListener("click", toggle);
// desktopBtnClose.addEventListener("click", toggle);





