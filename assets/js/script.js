// Menu Mobile
document.querySelector('.menu-toggle').addEventListener('click', function() {
  this.classList.toggle('active');
});

// Initialisation Snipcart
document.addEventListener('DOMContentLoaded', function() {
  window.Snipcart.api.configure('show_continue_shopping', true);
});

// Scroll Animations
window.addEventListener('scroll', () => {
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      el.classList.add('animated');
    }
  });
});
