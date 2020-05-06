/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const createMenuComponent = (data) => {
  const menu = document.createElement('div');
  const ul = document.createElement('ul');
  const menuItems = data.map((item) => {
    const li = document.createElement('li');
    li.innerText = item;
    return li;
  });

  menuItems.forEach(item => {
    ul.append(item);
  });

  menu.append(ul);

  menu.classList.add('menu');

  return menu;
};

const menuDiv = createMenuComponent(menuItems);
const menuButton = document.querySelector('.menu-button');
const header = document.querySelector('.header');
const body = document.querySelector('body');

//button picture changing
let menuButtonToggle = false;
const menuImg = './assets/menu.png';
const cancelImg = './assets/cancel.png';

//Can be run directly with 'open'/'close'. Also returns a function for storing each option in a new function.
const menuFunction = (option) => {
  return () => {
    if (option === 'close') {
      if(menuButtonToggle) {
        gsap.fromTo(".menu-button", { opacity: 0 }, { opacity: 1, duration: .2 });
        gsap.fromTo(".menu-button", { rotation: 90 }, { rotation: 0, duration: .1 });
      }
      menuButtonToggle = false;
      menuButton.setAttribute('src', menuImg);
      menuDiv.classList.remove('menu--open');
    } else if (option === 'open') {
      if(!menuButtonToggle) {
        gsap.fromTo(".menu-button", { opacity: 0 }, { opacity: 1, duration: .2 });
        gsap.fromTo(".menu-button", { rotation: 0 }, { rotation: 90, duration: .1 });
      }
      menuButtonToggle = true;
      menuButton.setAttribute('src', cancelImg);
      menuDiv.classList.add('menu--open');
    }
  }
}

//Create functions for always opening, always closing, or toggling the menu.
const closeMenu = menuFunction('close');
const openMenu = menuFunction('open');
const openCloseMenu = () => {
  if(menuButtonToggle) {
    closeMenu();
  } else {
    openMenu();
  }
}

//Prevent clicking on the menu from closing the menu due to event listener on body.
menuDiv.addEventListener('click', (event) => {
  event.stopPropagation();
});
//Menu button opens and closes menu
menuButton.addEventListener('click', (event) => {
  event.stopPropagation();
  openCloseMenu();
});
//Option to close the menu by clicking elsewhere on the page
body.addEventListener('click', (event) => {
  event.stopPropagation();
  closeMenu();
});

body.append(menuDiv);

//change button picture without css background images
menuButton.setAttribute('src', menuImg);