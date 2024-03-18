let menuState = false;

function toggleMobileMenu() {
    menuState = !menuState;

    const mobilemenu = document.querySelector('.navbar-menu ul');
    let icon = document.querySelector('#menu-icon');

    if (menuState) {
        icon.src = 'images/menu-icon.svg';
        mobilemenu.style.display = 'none';
    } else {
        icon.src = 'images/close-icon.svg';
        mobilemenu.style.display = 'flex';
    }
}