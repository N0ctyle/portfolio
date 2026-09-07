// On récupère toutes les sections qui ont la classe "reveal"
const sections = document.querySelectorAll('.reveal');

const observateur = new IntersectionObserver(function(entrees) {
  entrees.forEach(function(entree) {
    if (entree.isIntersecting) {
      entree.target.classList.add('visible');
    }
  });
});

sections.forEach(function(section) {
  observateur.observe(section);
});

// Bouton retour en haut
const boutonHaut = document.getElementById('retour-haut');

window.addEventListener('scroll', function() {
  if (window.scrollY > 400) {
    boutonHaut.classList.add('visible');
  } else {
    boutonHaut.classList.remove('visible');
  }
});

boutonHaut.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Menu burger mobile
const boutonBurger = document.getElementById('menu-burger');
const liensNav = document.getElementById('liens-nav');

boutonBurger.addEventListener('click', function() {
  liensNav.classList.toggle('actif');
});