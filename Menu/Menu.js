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


menuButton.addEventListener('click', () =>{
  menuDiv.classList.toggle('menu--open');
  menuDiv.classList.toggle('menu-open');
});

// header.append(menuDiv);
body.append(menuDiv);

//change button picture without css background images
menuButton.setAttribute('src', menuImg);