function createMenu() {
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');

    menu.innerHTML = `
        <h1>Menu</h1>
    `;

    const menuCards = document.createElement('div');
    menuCards.classList.add('menuCards');
    menu.appendChild(menuCards);

    menuCards.appendChild(createMenuCard('Pineapple Pizza', 'This pineapple pizza brings the finest pineapple to the table!'));
    menuCards.appendChild(createMenuCard('Cheese Pizza', 'Looking for the most cheesiest pizza in the land? We got it right here!'));
    menuCards.appendChild(createMenuCard('Pepperoni Pizza', 'We supply the most fresh pepperoni with each carefully individually placed!'));
    menuCards.appendChild(createMenuCard('Ultimate Pizza', 'The ultimate pizza is the most delicious and scrumptious pizza you will ever taste!'));
    menuCards.appendChild(createMenuCard('Extra Cheesy Alfredo Pizza', 'If you like alfredo and extra cheese this is the pizza for you!'));
    menuCards.appendChild(createMenuCard('Create Your Own Pizza', 'If you want a delicious customizable pizza than this is the option for you!'));

    return menu;
}

function createMenuCard(name, description) {
    const menuCard = document.createElement('div');
    menuCard.classList.add('menuCard');
    
    const foodName = document.createElement('h2');
    foodName.textContent = name;

    const foodDescription = document.createElement('p');
    foodDescription.textContent = description;

    menuCard.appendChild(foodName);
    menuCard.appendChild(foodDescription);

    return menuCard;
}

function renderMenu() {
    const body = document.getElementById('body');
    body.textContent = '';
    body.appendChild(createMenu());
}

export default renderMenu;