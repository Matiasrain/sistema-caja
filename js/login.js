
// Verificar si el usuario ha iniciado sesión previamente al cargar la página
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  const passwordInput = document.getElementById("passwordInput");
  const password = passwordInput.value;

  // Envía la contraseña al servidor para la validación
  fetch("php/login.php", {
    method: "POST",
    body: new URLSearchParams({ password }),
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Contraseña correcta, almacenar información de inicio de sesión en localStorage
        localStorage.setItem("isLoggedIn", "true");
        // Redirigir a main.html después de iniciar sesión exitosamente
        window.location.href = "main.html";
      } else {
        // Contraseña incorrecta, mostrar mensaje de error
        var errorMessage = document.getElementById("errorMessage");
        errorMessage.textContent = "¡Contraseña incorrecta!";
        errorMessage.style.color = "red"; // Establecer el color del mensaje en rojo
        passwordInput.value = ""; // Limpiar el campo de contraseña
      }
    })
    .catch((error) => {
      console.error("Error al procesar la solicitud:", error);
    });
});

// Función para cerrar sesión
function cerrarSesion() {
  localStorage.removeItem("isLoggedIn");
  window.location.reload(true);
  window.location.href = "login.html";

}
