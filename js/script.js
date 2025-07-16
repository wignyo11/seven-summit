// script.js
// Contoh: scroll halus untuk anchor link
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
