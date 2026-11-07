
// ? change btn1 and btn2 to the buttons classes, then change
// ? the content-btn-group and share-btn group to reference containers
// ? then update toggle so click=ing the buttons toggles the containers
// ? right now the containers are being clicked

// const btn1 = document.querySelector('.content-btn-group');
// const btn2 = document.querySelector('.share-btn-group');
// const btn3 = document.querySelector(".desktop-btn")
// const container = document.querySelector(".main-container-content");
// const container2 =document.querySelector(".share-btn-group-desktop");

// function toggleElements() {
  // btn1.classList.toggle('display');
  // btn2.classList.toggle('display');
  // container.classList.toggle("row-gap-small");
  // container2.classList.remove("view");
  // container2.classList.add("view");
  // container2.classList.toggle('view')
  // can also use add and remove class instead of toggle
  // just use class view (ie display none) and add and remove it from share-btn-group-desktop
// }

// Add the click event to both buttons
// btn1.addEventListener('click', toggleElements);
// btn2.addEventListener('click', toggleElements);
// btn3.addEventListener('click', toggleElements);


// Mobile
const mobileBtnOpen = document.querySelector('.mobile-btn-open');
const mobileBtnClose = document.querySelector('.mobile-btn-close');
const mobileContentContainer = document.querySelector('.content-btn-group');
const mobileShareContainer = document.querySelector('.share-btn-group');
const container = document.querySelector(".main-container-content");

// Desktop
const desktopBtnOpen = document.querySelector('.desktop-btn-open');
const desktopBtnClose = document.querySelector('.desktop-btn-close');
// const desktopContentContainer = document.querySelector('.content-btn-group-desktop');
const desktopShareContainer = document.querySelector('.share-btn-group-desktop');


// ? consolidate to toggle
// function openMobileShareLinks(){
//   container.classList.toggle("row-gap-small");
//   mobileContentContainer.classList.add("display");
//   mobileShareContainer.classList.remove("display");
// }

// function closeMobileShareLinks(){
//   container.classList.toggle("row-gap-small");
//   mobileContentContainer.classList.remove("display");
//   mobileShareContainer.classList.add("display");
// }

// function openDesktopShareLinks(){
  // container.classList.toggle("row-gap-small");
  // desktopContentContainer.classList.add("display");
  // desktopShareContainer.classList.remove("display");
  // desktopShareContainer.classList.toggle("display");
// }

// function closeDesktopShareLinks(){
  // container.classList.toggle("row-gap-small");
  // desktopContentContainer.classList.remove("display");
  // desktopShareContainer.classList.add("display");
// }

function toggle(){
  container.classList.toggle("row-gap-small");
  mobileContentContainer.classList.toggle("display");
  mobileShareContainer.classList.toggle("display");

  desktopShareContainer.classList.toggle("display");

}


mobileBtnOpen.addEventListener("click", toggle);
mobileBtnClose.addEventListener("click", toggle);

desktopBtnOpen.addEventListener("click", toggle);
desktopBtnClose.addEventListener("click", toggle);


// mobileBtnOpen.addEventListener("click", openMobileShareLinks);
// mobileBtnClose.addEventListener("click", closeMobileShareLinks);

// desktopBtnOpen.addEventListener("click", openDesktopShareLinks);
// desktopBtnClose.addEventListener("click", openDesktopShareLinks);

// desktopBtnClose.addEventListener("click", closeDesktopShareLinks);




