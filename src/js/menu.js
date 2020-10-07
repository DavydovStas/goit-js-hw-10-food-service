import menuTemplate from '../templates/menu.hbs';
import menu from '../menu.json';

const menuListRef = document.querySelector('.js-menu');
const markupMenu = makeMarkupMenu(menu);

function makeMarkupMenu(menu) {
  return menu.map(menuTemplate).join('');
}

export default function renderMenu() {
  menuListRef.insertAdjacentHTML('afterbegin', markupMenu);
}
