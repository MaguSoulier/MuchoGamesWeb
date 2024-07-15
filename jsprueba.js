window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const parallax = document.querySelector('.parallax');
    parallax.style.transform = 'translateY(' + scrolled * 0.5 + 'px)';
  });
  