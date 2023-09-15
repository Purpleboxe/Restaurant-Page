import renderHome from './home.js';
import renderMenu from './menu.js';
import renderAbout from './about.js';

const content = document.getElementById('content');

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const logo = document.createElement('div');
    logo.classList.add('logo');

    const headerText = document.createElement('h1');
    headerText.innerText = 'Crusty Pizza';

    const pizzaImg = document.createElement('img');
    pizzaImg.src = 'images/pizza-img.png';
    pizzaImg.alt = 'Pizza';
    
    logo.appendChild(pizzaImg);
    logo.appendChild(headerText);
    header.appendChild(logo);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const nav = document.createElement('nav');

    const home = document.createElement('button');
    home.classList.add('btn');
    home.textContent = 'Home';
    home.addEventListener('click', (e) => {
        renderHome();
    });
    
    const menu = document.createElement('button');
    menu.classList.add('btn');
    menu.textContent = 'Menu';
    menu.addEventListener('click', (e) => {
        renderMenu();
    });

    const about = document.createElement('button');
    about.classList.add('btn');
    about.textContent = 'About';
    about.addEventListener('click', (e) => {
        renderAbout();
    })

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(about);

    return nav;
}

function createBody() {
    const body = document.createElement('div');
    body.setAttribute('id', 'body');
    return body;
}

content.appendChild(createHeader());
content.appendChild(createBody());
renderHome();