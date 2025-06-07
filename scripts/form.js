document.addEventListener('DOMContentLoaded', () => {
    // 1. DATA SOURCE
    const products = [
      { id: "fc-1888", name: "Flux Capacitor" },
      { id: "fc-2050", name: "Power Laces" },
      { id: "fs-1987", name: "Time Circuits" },
      { id: "ac-2000", name: "Low Voltage Reactor" },
      { id: "jj-1969", name: "Warp Equalizer" }
    ];

    // 2. GET DOM ELEMENTS
    const productSelect = document.getElementById('productName');
    const reviewForm = document.getElementById('reviewForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    // 3. POPULATE PRODUCT SELECTOR
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // 4. FOOTER DYNAMICS
    const currentYearSpan = document.getElementById('currentYear');
    currentYearSpan.textContent = new Date().getFullYear();
    const lastModifiedSpan = document.getElementById('lastModified');
    lastModifiedSpan.textContent = document.lastModified;

    // 5. HANDLE FORM SUBMISSION
    reviewForm.addEventListener('submit', (event) => {
        // Prevent the default form submission (which would reload the page)
        event.preventDefault();

        // --- Run localStorage counter logic ---
        let reviewCount = Number(localStorage.getItem('formSubmissionsCount')) || 0;
        reviewCount++;
        localStorage.setItem('formSubmissionsCount', reviewCount);

        // --- Update and show the confirmation message ---
        document.getElementById('reviewCount').textContent = reviewCount;
        
        // Hide the form
        reviewForm.classList.add('hidden');
        
        // Show the confirmation message
        confirmationMessage.classList.remove('hidden');
    });
});