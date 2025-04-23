function mainPage() {
    let body = document.querySelector('body');
    let logo = document.createElement('img');
    logo.src = './assets/pirateLogo.png';
    let title = document.createElement('h1');
    title.innerText = 'Welcome to the PirateJS';

    body.style.backgroundColor = 'gray';
    body.style.display = 'flex';
    body.style.flexDirection = 'column';
    body.style.alignItems = 'center';
    body.style.justifyContent = 'center';
    body.appendChild(logo);
    body.appendChild(title);
}

export default mainPage;