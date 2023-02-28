import loadHomePage from './home';
import loadMenuPage from './menu';
import loadContactPage from './contact';
import './style.css';
import Restaurant from './restaurant.jpeg';

const body = document.querySelector('body');
const header = document.createElement('header');
const nav = document.createElement('ul');
const homeNav = document.createElement('button');
const menuNav = document.createElement('button');
const contactNav = document.createElement('button');
const content = document.createElement('div');
const footer = document.createElement('footer');

content.id = 'content';
body.appendChild(content);

body.style.backgroundImage = `url(${Restaurant})`;

homeNav.textContent = "Home";
menuNav.textContent = "Menu";
contactNav.textContent = "Contact us";
nav.appendChild(homeNav);
nav.appendChild(menuNav);
nav.appendChild(contactNav);
nav.classList.add('nav');
header.appendChild(nav);
body.insertBefore(header, content);

loadHomePage();

footer.innerHTML = `Photo by <a href="https://unsplash.com/@ninjason?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason Leung</a> on <a href="https://unsplash.com/photos/poI7DelFiVA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`;
body.appendChild(footer);

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
