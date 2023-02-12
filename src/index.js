import loadHomePage from './home';
import loadMenuPage from './menu';
import loadContactPage from './contact';

const body = document.querySelector('body');
const header = document.createElement('header');
const nav = document.createElement('ul');
const homeNav = document.createElement('button');
const menuNav = document.createElement('button');
const contactNav = document.createElement('button');
const content = document.getElementById('content');

homeNav.textContent = "Home";
menuNav.textContent = "Menu";
contactNav.textContent = "Contact";
nav.appendChild(homeNav);
nav.appendChild(menuNav);
nav.appendChild(contactNav);
nav.classList.add('nav');
header.appendChild(nav);
body.appendChild(header);

loadHomePage();

function clearContents() {
    Array.from(content.children).forEach(element => {
        content.removeChild(element);
    });
}

function switchToHomePage() {
    clearContents();
    loadHomePage();
}

function switchToMenuPage() {
    clearContents();
    loadMenuPage();
}

function switchToContactPage() {
    clearContents();
    loadContactPage();
}

homeNav.addEventListener('click', switchToHomePage);
menuNav.addEventListener('click', switchToMenuPage);
contactNav.addEventListener('click', switchToContactPage);