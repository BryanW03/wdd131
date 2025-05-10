  
document.addEventListener('DOMContentLoaded', function() {
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedParagraph = document.getElementById("lastModified");


    const currentYear = new Date().getFullYear();


    currentYearSpan.textContent = currentYear;


    const lastModifiedDate = document.lastModified;

    lastModifiedParagraph.textContent = "Las Modified: " + lastModifiedDate;
});