function showMobileNav() {
    let mobileNavBtn = document.querySelector('.mobile-menu-btn');

    mobileNavBtn.addEventListener('click', (e) => {
        let mobileMenu = document.querySelector('.header-nav');
        if (mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
        } else {
            mobileMenu.classList.add('open');
        }
    })
}

export default showMobileNav;