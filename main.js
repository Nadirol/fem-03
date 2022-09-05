const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

navToggle.addEventListener('click', () => {
    primaryNav.hasAttribute('data-visible') ? navToggle.setAttribute('aria-expanded', false) : navToggle.setAttribute('aria-expanded', true);
    primaryNav.toggleAttribute('data-visible');
    primaryHeader.toggleAttribute('data-overlay');
})

const dropDownButtons = document.querySelectorAll('.dropdown-button');
const dropDownMenus = document.querySelector('.dropdown-menu')

dropDownButtons.forEach(e => {
    e.onclick = function() {
        let itemVisibility = e.getAttribute('aria-expanded');
        itemVisibility === 'true' ? e.setAttribute('aria-expanded', false) : e.setAttribute('aria-expanded', true);
        console.log(e.getAttribute('aria-expanded'));
    }
})