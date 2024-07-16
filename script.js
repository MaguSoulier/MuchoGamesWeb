document.addEventListener("scroll", function() {
    const isotipo = document.querySelector(".isotipo");
    if (window.scrollY > 900) { // Ajusta este valor según cuándo quieres que aparezca el logo
      isotipo.style.left = '2%'; // Posición final cuando aparece
    } else {
      isotipo.style.left = '-20%'; // Posición inicial fuera de la pantalla si vuelve al tope
    }
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




