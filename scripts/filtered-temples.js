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
    const mainTitle = document.querySelector('main h2'); 

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

    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Santo Domingo Dominican Republic",
            location: "Santo Domingo,Dominican Republic",
            dedicated: "2000, Septembre, 17",
            area: 67000,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/santo-domingo-dominican-republic-temple/santo-domingo-dominican-republic-temple-16840.jpg"
        },
        {
            templeName: "San Juan Puerto Rico",
            location: "San Juan, Puerto Rico",
            dedicated: "2023, Jenuary, 15",
            area: 6988,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/san-juan-puerto-rico-temple/san-juan-puerto-rico-temple-2603.jpg"
        },
        {
            templeName: "Guayaquil Ecuador",
            location: "Guayaquil, Ecuador",
            dedicated: "1999, August, 1-2",
            area: 45000,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/guayaquil-ecuador-temple/guayaquil-ecuador-temple-8396.jpg"
        },
    ];

    displayTemples(temples, "Home"); 

    function displayTemples(filteredTemples, titleText) {
        const resGrid = document.querySelector(".res-grid");
        resGrid.innerHTML = ""; 
        mainTitle.textContent = `${titleText.toUpperCase()} TEMPLES`; 

        filteredTemples.forEach(temple => {
            let card = document.createElement("section");
            let name = document.createElement("h3");
            let location = document.createElement("p");
            let dedication = document.createElement("p");
            let area = document.createElement("p");
            let img = document.createElement("img");

            name.textContent = temple.templeName;
            location.innerHTML = `<span class="Label">Location:</span> ${temple.location}`;
            dedication.innerHTML = `<span class="Label">Dedicated:</span> ${temple.dedicated}`;
            area.innerHTML = `<span class="Label">Size:</span> ${temple.area} sq ft`;
            img.setAttribute("src", temple.imageUrl);
            img.setAttribute("alt", `${temple.templeName} Temple`);
            img.setAttribute("loading", "lazy");

            card.appendChild(name);
            card.appendChild(location);
            card.appendChild(dedication);
            card.appendChild(area);
            card.appendChild(img);
            
            resGrid.appendChild(card);
        });
    }

    function getYearFromDedication(dedicatedString) {
        const parts = dedicatedString.split(',');
        return parseInt(parts[0].trim());
    }

    document.querySelectorAll('.main-nav ul li a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 
            const filter = event.target.textContent.toLowerCase(); 

            let filteredList = [];
            let newTitle = "";

            switch (filter) {
                case 'old':
                    filteredList = temples.filter(temple => getYearFromDedication(temple.dedicated) < 1900);
                    newTitle = "Old";
                    break;
                case 'new':
                    filteredList = temples.filter(temple => getYearFromDedication(temple.dedicated) > 2000);
                    newTitle = "New";
                    break;
                case 'large':
                    filteredList = temples.filter(temple => temple.area > 90000);
                    newTitle = "Large";
                    break;
                case 'small':
                    filteredList = temples.filter(temple => temple.area < 10000);
                    newTitle = "Small";
                    break;
                case 'home':
                default:
                    filteredList = temples; 
                    newTitle = "Home";
                    break;
            }
            displayTemples(filteredList, newTitle); 
            navUl.classList.remove('open'); 
            hamburgerButton.innerHTML = '&#9776;'; 
        });
    });
});