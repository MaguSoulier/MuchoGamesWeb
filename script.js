document.addEventListener("scroll", function() {
  const isotipo = document.querySelector(".isotipo");
  if (window.scrollY > 900) { // Ajusta este valor según cuándo quieres que aparezca el logo
      isotipo.style.left = '2%'; // Posición final cuando aparece
  } else {
      isotipo.style.left = '-20%'; // Posición inicial fuera de la pantalla si vuelve al tope
  }
});

document.querySelector(".isotipo").addEventListener("click", function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth' // Desplazamiento suave
  });
});

  document.addEventListener('DOMContentLoaded', () => {
    const hamburguer = document.getElementById('hamburguer');
    const svg1 = document.getElementById('animar-svg');
    const svg2 = document.getElementById('animar-svg2');
    const svg3 = document.getElementById('animar-svg3');
    const menuList = document.querySelector('.menu-list');
    
    hamburguer.addEventListener('click', () => {
        svg1.classList.toggle('rotado1');
        svg2.classList.toggle('rotado2');
        svg3.classList.toggle('movido');
        menuList.classList.toggle('open');
    });
});

document.querySelector('.contactus').addEventListener('click', function() {
  document.getElementById('contact-popup').style.display = 'flex';
});

document.querySelector('.close-popup').addEventListener('click', function() {
  document.getElementById('contact-popup').style.display = 'none';
});

// Cerrar el popup al hacer clic fuera de popup-content
document.getElementById('contact-popup').addEventListener('click', function(event) {
  if (event.target === this) {
    this.style.display = 'none';
  }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Obtén los datos del formulario
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Aquí se debería agregar la lógica para enviar el correo
  // Se puede usar un servicio backend como PHP o una API de terceros como EmailJS
  
  alert('Form submitted. Name: ' + name + ', Email: ' + email + ', Message: ' + message);
  
  // Ocultar el popup después de enviar el formulario
  document.getElementById('contact-popup').style.display = 'none';
});




