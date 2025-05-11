document.addEventListener('DOMContentLoaded', function () {

    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedParagraph = document.getElementById('lastModified');
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
    }

    const header = document.querySelector('header');
    const nav = document.querySelector('header nav.main-nav'); 
    const navUl = document.querySelector('header nav.main-nav ul'); 

    if (header && nav && navUl) {
      
        const hamburgerButton = document.createElement('button');
        hamburgerButton.innerHTML = '&#9776;'; 
        hamburgerButton.id = 'hamburger-button';
        header.insertBefore(hamburgerButton, nav); 

        
        hamburgerButton.addEventListener('click', () => {
            navUl.classList.toggle('open');
          
            if (navUl.classList.contains('open')) {
                hamburgerButton.innerHTML = '&times;'; 
            } else {
                hamburgerButton.innerHTML = '&#9776;'; 
            }
        });

       
        navUl.classList.remove('open');

    } else {
        console.error('Header, navigation, or navigation list not found.');
    }
});