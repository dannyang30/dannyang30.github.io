// function showMobileMenu(){
//     const mobilemenu = document.querySelector('.navbar-menu ul')
//     mobilemenu.style.display = 'flex'
        
//     const menuicon = document.querySelector('#menu-icon')
//     menuicon.style.display = 'none'

//     const closeicon = document.querySelector('#close-icon')
//     closeicon.style.display = 'block'
// }

// function hideMobileMenu(){
//     const mobilemenu = document.querySelector('.navbar-menu ul')
//     mobilemenu.style.display = 'none'

//     const menuicon = document.querySelector('#menu-icon')
//     menuicon.style.display = 'block'

//     const closeicon = document.querySelector('#close-icon')
//     closeicon.style.display = 'none' 

//     // const hero = document.querySelector('.hero')
//     // const projects = document.querySelector('.projects')
//     // const contact = document.querySelector('.contact')
//     // const footer = document.querySelector('.footer')

//     // hero.style.display = 'block'
//     // projects.style.display = 'block'
//     // contact.style.display = 'block'
//     // footer.style.display = 'block'
// }


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