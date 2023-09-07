const burger = document.querySelector('.social-media .burger');
const nav = document.querySelector('.sidebar ul');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});