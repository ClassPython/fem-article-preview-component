
// Mobile
const mobileBtnOpen = document.querySelector('.mobile-btn-open');
const mobileBtnClose = document.querySelector('.mobile-btn-close');
const mobileContentContainer = document.querySelector('.content-mobile-profile-btn-group');
const mobileShareContainer = document.querySelector('.share-btn-group-mobile');

const container = document.querySelector(".main-container-content");

// Desktop
const desktopBtnOpen = document.querySelector('.desktop-btn-open');
const desktopShareContainer = document.querySelector('.share-btn-group-desktop');

// Share Image
const shareImage = document.querySelector(".btn-image");
const shareButton = document.querySelector(".share-btn");

function toggle(){
  // adjust size of row gap in main-container-content to prevent elements from shifting
  container.classList.toggle("row-gap-small");
  
  mobileContentContainer.classList.toggle("display");
  mobileShareContainer.classList.toggle("display");

  desktopShareContainer.classList.toggle("display");

  const isExpanded = shareButton.getAttribute('aria-expanded') === 'true';
  
  // change attribute property from true/false
  shareButton.setAttribute('aria-expanded', !isExpanded);
  shareImage.setAttribute('aria-hidden', !isExpanded);
  
}


mobileBtnOpen.addEventListener("click", toggle);
mobileBtnClose.addEventListener("click", toggle);

desktopBtnOpen.addEventListener("click", toggle);







