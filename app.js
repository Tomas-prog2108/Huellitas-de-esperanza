// SELECCIÓN DE ELEMENTOS DEL DOM

// Selecciona el botón "Iniciar Sesión" del panel derecho
const sign_in_btn = document.querySelector("#sign-in-btn");

// Selecciona el botón "Registrarse" del panel izquierdo  
const sign_up_btn = document.querySelector("#sign-up-btn");

// Selecciona el contenedor principal que controla toda la animación
const container = document.querySelector(".container");

// EVENT LISTENERS (ESCUCHADORES DE EVENTOS)

// Cuando se hace clic en el botón "Registrarse"
sign_up_btn.addEventListener("click", () => {
  // Agrega la clase "sign-up-mode" al contenedor
  // Esto activa todas las animaciones CSS para mostrar el formulario de registro:
  // - Mueve el círculo decorativo hacia la izquierda
  // - Oculta el formulario de login y muestra el de registro
  // - Desplaza el panel izquierdo fuera de vista
  // - Muestra el panel derecho con el botón para volver al login
  container.classList.add("sign-up-mode");
});

// Cuando se hace clic en el botón "Iniciar Sesión"
sign_in_btn.addEventListener("click", () => {
  // Remueve la clase "sign-up-mode" del contenedor
  // Esto revierte todas las animaciones CSS para mostrar el formulario de login:
  // - Mueve el círculo decorativo hacia la derecha
  // - Oculta el formulario de registro y muestra el de login
  // - Muestra el panel izquierdo con el botón para ir a registro
  // - Desplaza el panel derecho fuera de vista
  container.classList.remove("sign-up-mode");
});