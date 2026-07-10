const filters = document.querySelectorAll('.filter');
const projectCards = document.querySelectorAll('.project-card');

filters.forEach((button) => {
  button.setAttribute('aria-pressed', String(button.classList.contains('active')));

  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filters.forEach((item) => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });

    projectCards.forEach((card) => {
      const visible = filter === 'all' || card.dataset.group === filter;
      card.classList.toggle('hidden', !visible);
      card.setAttribute('aria-hidden', String(!visible));
    });
  });
});

const printResume = () => {
  const previousTitle = document.title;
  document.title = 'Dimash_Janibekov_Backend_Fullstack_Resume';
  window.print();
  document.title = previousTitle;
};

document.querySelectorAll('[data-print], #printResume').forEach((button) => {
  button.addEventListener('click', printResume);
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealItems.forEach((item) => observer.observe(item));
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
