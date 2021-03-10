import menuData from './menu.json';
import menuTemplate from './templat.hbs';
import './styles.css';

const menuRef = document.querySelector('.js-menu');

const menu = menuData.map(obj => menuTemplate(obj));
menuRef.innerHTML = menu.join(' ');
