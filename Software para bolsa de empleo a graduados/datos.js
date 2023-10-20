document.addEventListener("DOMContentLoaded", function () {
    // Obtén el formulario y el botón
    const form = document.getElementById("dataRegistrationForm");
    const registerDataBtn = document.getElementById("registerDataBtn");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita que el formulario se envíe por defecto
  
      // Obtiene los valores de los campos del formulario
      const name = document.getElementById("name").value;
      const title = document.getElementById("title").value;
      const experience = parseInt(document.getElementById("experience").value);
      const skills = document.getElementById("skills").value;
      const city = document.getElementById("city").value;
      const phone = document.getElementById("phone").value;
  
      // Realiza validaciones
      if (name === "" || title === "" || isNaN(experience) || skills === "" || city === "" || phone === "") {
        alert("Por favor, complete todos los campos.");
      } else {
        // Los datos se han ingresado correctamente
        // Aquí puedes enviar los datos al servidor o almacenarlos en un lugar apropiado
        alert("Los datos se han almacenado correctamente.");
        form.reset(); // Limpia el formulario
      }
    });
  });
  