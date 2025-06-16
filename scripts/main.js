document.addEventListener('DOMContentLoaded', () => {
    
    // --- FUNCTION 1: Handle footer and navigation menu ---
    function initializeWebsite() {
        // Object to manage recurring DOM elements
        const uiElements = {
            currentYear: document.getElementById('current-year'),
            lastModified: document.getElementById('last-modified'),
            menuButton: document.getElementById('menu-button'),
            navLinks: document.getElementById('nav-links')
        };
        
        // Update copyright year and last modified date
        const year = new Date().getFullYear();
        if (uiElements.currentYear) {
            uiElements.currentYear.textContent = year;
        }
        if (uiElements.lastModified) {
            uiElements.lastModified.textContent = document.lastModified;
        }

        // Event Listener for the hamburger menu button
        if (uiElements.menuButton && uiElements.navLinks) {
            uiElements.menuButton.addEventListener('click', () => {
                uiElements.navLinks.classList.toggle('open');
            });
        }
    }

    // --- FUNCTION 2: Load and filter benefits (Array, Objects, Array Methods) ---
    function setupBenefitsPage() {
        const benefitsContainer = document.getElementById('benefits-container');
        const benefitFilter = document.getElementById('benefit-filter');
        
        // Only run this code if we are on the benefits page
        if (!benefitsContainer || !benefitFilter) return;

        // Array of objects containing benefit information
        const benefits = [
            { title: "Stress Reduction", category: "mental", description: "Mindfulness meditation lowers cortisol, the stress hormone.", image: "images/avoid-stress-scaled.webp" },
            { title: "Improved Focus", category: "mental", description: "Train your attention to concentrate better and for longer on your tasks.", image: "images/Improved Focus.webp" },
            { title: "Greater Self-Awareness", category: "emotional", description: "Helps you better understand your thoughts and emotions without judgment.", image: "images/self.webp" },
            { title: "Promotes Emotional Health", category: "emotional", description: "Fosters a more positive outlook and can reduce negative thinking.", image: "images/emotional.webp" },
            { title: "Lowers Blood Pressure", category: "physical", description: "The relaxation induced by meditation can help lower blood pressure.", image: "images/Blood.webp" },
            { title: "Improves Sleep Quality", category: "physical", description: "Helps calm the mind, facilitating deeper and more restful sleep.", image: "images/sleep.webp" }
        ];

        // Function to display benefits in the DOM
        function displayBenefits(filteredBenefits) {
            benefitsContainer.innerHTML = ''; // Clear the container
            filteredBenefits.forEach(benefit => {
                // Exclusively using Template Literals to build the HTML string
                const cardHTML = `
                    <div class="benefit-card">
                        <img src="${benefit.image}" alt="${benefit.title}" loading="lazy">
                        <div class="card-content">
                            <h4>${benefit.title}</h4>
                            <p>${benefit.description}</p>
                        </div>
                    </div>
                `;
                benefitsContainer.innerHTML += cardHTML;
            });
        }

        // Event Listener for the filter dropdown
        benefitFilter.addEventListener('change', (event) => {
            const selectedCategory = event.target.value;
            
            // Using conditional branching and an array method (filter)
            if (selectedCategory === 'all') {
                displayBenefits(benefits);
            } else {
                const filtered = benefits.filter(benefit => benefit.category === selectedCategory);
                displayBenefits(filtered);
            }
        });

        // Initial load of all benefits
        displayBenefits(benefits);
    }

    // --- FUNCTION 3: Handle contact form and localStorage ---
    function setupContactForm() {
        const contactForm = document.getElementById('contact-form');
        const formMessage = document.getElementById('form-message');
        const submissionCounterEl = document.getElementById('form-submission-counter');
        
        if (!contactForm) return;

        // Load the submission count from localStorage
        let submissionCount = Number(localStorage.getItem('formSubmissions')) || 0;
        if (submissionCounterEl) {
           submissionCounterEl.textContent = submissionCount;
        }

        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the form from actually submitting

            // DOM Manipulation: Display a success message
            formMessage.textContent = 'Thank you for your message! We will get in touch with you soon.';
            formMessage.className = 'success';

            // Increment and save the count to localStorage
            submissionCount++;
            localStorage.setItem('formSubmissions', submissionCount);
            if (submissionCounterEl) {
                submissionCounterEl.textContent = submissionCount;
            }
            
            // Clear the form and message after a delay
            setTimeout(() => {
                contactForm.reset();
                formMessage.textContent = '';
                formMessage.className = '';
            }, 4000);
        });
    }

    // --- Execute all initialization functions ---
    initializeWebsite();
    setupBenefitsPage();
    setupContactForm();
});