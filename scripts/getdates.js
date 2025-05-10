  
document.addEventListener('DOMContentLoaded', function() {
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedParagraph = document.getElementById("lastModified");

    // Obtiene el año actual.
    const currentYear = new Date().getFullYear();

    // Inserta el año actual en el span.
    currentYearSpan.textContent = currentYear;

    // Obtiene la fecha de la última modificación del documento.
    const lastModifiedDate = document.lastModified;

    // Inserta la fecha de la última modificación en el párrafo.
    lastModifiedParagraph.textContent = "Las Modified: " + lastModifiedDate;
});