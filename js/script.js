const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

function setActiveNavLink() {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

function toggleStickyHeader() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}

window.addEventListener('scroll', () => {
    setActiveNavLink();
    toggleStickyHeader();
});


const typed = new Typed('.multiple-text', {
    strings: ['Movie', 'Data Science'],
    typeSpeed:100,
    backSpeed:100,
    backDelay: 1000,
    loop: true
});