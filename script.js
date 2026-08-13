const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const form = document.getElementById('quoteForm');
const note = document.getElementById('formNote');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  note.textContent = 'Thanks! Your quote request has been received. Connect this form to your email/API for production use.';
  form.reset();
});

const sections = document.querySelectorAll('main section[id]');
const links = document.querySelectorAll('.nav a:not(.nav-quote)');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id));
    }
  });
}, {rootMargin: '-35% 0px -55% 0px'});

sections.forEach(section => observer.observe(section));
