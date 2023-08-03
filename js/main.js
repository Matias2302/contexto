const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    
    if(visibility === "false"){
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute('aria-expanded', true);
    }
    else if(visibility === "true"){
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute('aria-expanded', false);

    }
});

/*===Contenido dinámico con trigger====*/
// Obtener el botón y el div con el texto adicional
const mostrarBtn = document.getElementById("mostrarBtn");
const textoAdicional = document.getElementById("texto-adicional");
const hero = document.getElementById("hero");
const box = document.getElementById("box");
const contextoLogo = document.getElementById("contexto-logo");

// Agregar un evento de clic al botón
mostrarBtn.addEventListener("click", function () {
  // Mostrar o ocultar el div con el texto adicional
  if (textoAdicional.style.display === "none") 
  {
    textoAdicional.style.display = "block";
    textoAdicional.classList.remove("fade-out");
    textoAdicional.classList.add("fade-in");
    textoAdicional.classList.add("texto-adicional-full");
    box.classList.add("box-1");
    hero.classList.add("hero-texto");
    contextoLogo.classList.add("contexto-logo-mid");
    
    mostrarBtn.textContent = "Menos info";
  } else {
    textoAdicional.classList.remove("fade-in");
    textoAdicional.classList.add("fade-out");
    box.classList.remove("box-1");
    hero.classList.remove("hero-texto");
    contextoLogo.classList.remove("contexto-logo-mid");
    textoAdicional.style.display = "none";
    mostrarBtn.textContent = "Más info";
  }
});