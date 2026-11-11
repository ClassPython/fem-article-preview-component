
// Mobile
const mobileBtnOpen = document.querySelector('.mobile-btn-open');
const mobileBtnClose = document.querySelector('.mobile-btn-close');
const mobileContentContainer = document.querySelector('.content-mobile-profile-btn-group');
const mobileShareContainer = document.querySelector('.share-btn-group-mobile');

const container = document.querySelector(".main-container-content");

// Desktop
const desktopBtn = document.querySelector('.desktop-btn');
const desktopShareContainer = document.querySelector('.share-btn-group-desktop');

// Share Image
// mobile
const mobileShareImage = document.querySelector(".mobile-share-image");
const mobileShareImageClose = document.querySelector(".mobile-share-image-close");

function toggle(){
  // adjust size of row gap in main-container-content to prevent elements from shifting
  container.classList.toggle("row-gap-small");
  
  mobileContentContainer.classList.toggle("display");
  mobileShareContainer.classList.toggle("display");

  desktopShareContainer.classList.toggle("display");

  const isExpandedI = mobileBtnOpen.getAttribute('aria-expanded') === 'true';
  const isExpandedII = mobileBtnClose.getAttribute('aria-expanded') === 'true';
  const isExpandedIII = desktopBtn.getAttribute('aria-expanded') === 'true';
  
  // change attribute property from true/false
  mobileBtnOpen.setAttribute('aria-expanded', !isExpandedI);
  mobileBtnClose.setAttribute('aria-expanded', !isExpandedII);
  desktopBtn.setAttribute('aria-expanded', !isExpandedIII);
   
  mobileShareImage.setAttribute('aria-hidden', !isExpandedI);
  mobileShareImageClose.setAttribute('aria-hidden', !!isExpandedII);
  
}


mobileBtnOpen.addEventListener("click", toggle);
mobileBtnClose.addEventListener("click", toggle);

desktopBtn.addEventListener("click", toggle);










