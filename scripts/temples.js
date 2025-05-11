document.addEventListener('DOMContentLoaded', function () {
    // Footer: Copyright Year and Last Modified Date
    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedParagraph = document.getElementById('lastModified');
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
    }

    // Hamburger Menu Functionality
    const header = document.querySelector('header');
    const nav = document.querySelector('header nav.main-nav'); // Selección específica con la clase
    const navUl = document.querySelector('header nav.main-nav ul'); // Selección específica con la clase

    if (header && nav && navUl) {
        // Create hamburger button
        const hamburgerButton = document.createElement('button');
        hamburgerButton.innerHTML = '&#9776;'; // Hamburger icon (☰)
        hamburgerButton.id = 'hamburger-button';
        header.insertBefore(hamburgerButton, nav); // Add button before the nav

        // Toggle navigation visibility
        hamburgerButton.addEventListener('click', () => {
            navUl.classList.toggle('open');
            // Change button icon based on menu state
            if (navUl.classList.contains('open')) {
                hamburgerButton.innerHTML = '&times;'; // 'X' icon
            } else {
                hamburgerButton.innerHTML = '&#9776;'; // Hamburger icon (☰)
            }
        });

        // Hide nav ul by default on small screens (CSS will handle this better)
        // but we ensure it's closed initially if JS is active
        navUl.classList.remove('open');

    } else {
        console.error('Header, navigation, or navigation list not found.');
    }
});