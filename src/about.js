function createAbout() {
    const about = document.createElement('div');
    about.setAttribute('id', 'about');

    about.innerHTML = `
        <h1>About</h1>
        <p>Crusty Pizza motives are always to create the most delicious pizzas.
        We strive on 100% customer satisfaction and service. 9/10 pizza chefs recommend Crusty Pizza.</p>
    `;

    return about;
}

function renderAbout() {
    const body = document.getElementById('body');
    body.textContent = '';
    body.appendChild(createAbout());
}

export default renderAbout;