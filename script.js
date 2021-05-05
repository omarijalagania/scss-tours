const burgerIcon = document.querySelector('#burger-icon');
const navList = document.querySelector('.nav-links');

let menuToggle = false;

const burgerMenu = () => {
    navList.classList.toggle('active');
}

burgerIcon.addEventListener('click', burgerMenu);