
// Validaciones
document.addEventListener("DOMContentLoaded", function () {
    const filterButton = document.getElementById("filterButton");

    filterButton.addEventListener("click", function () {
        const location = document.getElementById("location").value;
        const industry = document.getElementById("industry").value;

        if (!location && industry === "") {
            alert("Por favor, selecciona al menos un filtro (ubicación o industria).");
        } else {
            // Realizar la búsqueda con los filtros seleccionados
            alert("Búsqueda realizada con éxito.");
        }
    });

    const applyButtons = document.querySelectorAll(".apply-button");

    applyButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            alert("¡Has aplicado al trabajo!");
        });
    });
});
