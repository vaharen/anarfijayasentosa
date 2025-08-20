document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('nav');
  const heroBtn = document.querySelector('.hero-tagline .button-lg-primary');
  if (heroBtn) {
    heroBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const about = document.getElementById('about-us');
      if (about) {
        about.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  const navContactBtn = document.querySelector('nav .button');
  if (navContactBtn) {
    navContactBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const contact = document.getElementById('Contact-Us');
      if (contact) {
        contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  const threshold = 720;
  window.addEventListener('scroll', function () {
    if (window.scrollY > threshold) {
      navbar.classList.add('nav-color');
      navbar.classList.remove('bg-transparent');
    } else {
      navbar.classList.remove('nav-color');
      navbar.classList.add('bg-transparent');
    }
  });
})
