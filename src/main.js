const toggle = document.querySelector('.menu-toggle');
const panel = document.querySelector('.menu-panel');
const close = document.querySelector('.menu-close');
const setMenu = (open) => {
  toggle.classList.toggle('active', open);
  toggle.setAttribute('aria-expanded', String(open));
  panel.classList.toggle('open', open);
  panel.setAttribute('aria-hidden', String(!open));
};
toggle.addEventListener('click', () => setMenu(!panel.classList.contains('open')));
close.addEventListener('click', () => setMenu(false));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenu(false); });
