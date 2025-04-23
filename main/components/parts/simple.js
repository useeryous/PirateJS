function Sbtn(a) {
    let btn = document.createElement('button');
    btn.innerText = a;
    return btn;
}

function SnavBar() {
    let navbar = document.createElement('span');
    navbar.style.width = '100%';
    navbar.style.height = '45px';
    navbar.style.backgroundColor = 'grey';
    navbar.style.position = 'absolute';
    return navbar;
}
function Stopbar() {
    let topbar = document.createElement('div');
    topbar.style.width = '100%';
    topbar.style.height = '45px';
    topbar.style.backgroundColor = 'grey';
    return topbar;
}

function Sscreen() {
    let screen = document.createElement('div');
    let iframe = document.createElement('iframe');
    screen.style.width = '100%';
    screen.style.height = '100%';
    screen.style.backgroundColor = 'white';
    screen.appendChild(iframe);
    return screen;
}