// Sélection des éléments
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');

// Ajout d'un événement pour afficher/masquer le menu
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});