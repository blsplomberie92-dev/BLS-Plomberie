/* ===========================
   BLS PLOMBERIE — SCRIPT.JS
   =========================== */

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Sticky nav shadow on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.svc, .avis-card, .tarif-row, .c-info-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Contact form handler
const form = document.querySelector('.contact-form');
if (form) {
  const btn = form.querySelector('button');
  btn.addEventListener('click', () => {
    const nom = form.querySelector('input[type="text"]').value.trim();
    const tel = form.querySelector('input[type="tel"]').value.trim();
    if (!nom || !tel) {
      btn.textContent = 'Veuillez remplir nom et téléphone';
      btn.style.background = '#c0392b';
      setTimeout(() => {
        btn.textContent = 'Envoyer ma demande →';
        btn.style.background = '';
      }, 2500);
      return;
    }
    btn.textContent = '✓ Demande envoyée !';
    btn.style.background = '#1a6fa0';
    setTimeout(() => {
      btn.textContent = 'Envoyer ma demande →';
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}
