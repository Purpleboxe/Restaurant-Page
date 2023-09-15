import createMenu from './menu.js';

function createHome() {
    const home = document.createElement('div');
    home.setAttribute('id', 'home');

    home.innerHTML = 
    `<h1>Crusty Pizza</h1>
    <h2>Order with us now!</h2>
    <p>Pizza gets you movin'</p>
    `;

    const orderBtn = document.createElement('button');
    orderBtn.innerText = 'Order Now';
    orderBtn.addEventListener('click', (e) => {
        createMenu();
    });

    home.appendChild(orderBtn);

    return home;
}

function renderHome() {
    const body = document.getElementById('body');
    body.textContent = '';
    body.appendChild(createHome());
}

export default renderHome;