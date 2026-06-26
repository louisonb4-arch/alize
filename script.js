/* =========================================================
   M'Alizé — interactions
   ========================================================= */

// --- Lien Facebook centralisé : à renseigner une fois ici ---
const FACEBOOK_URL = '#'; // ex: 'https://www.facebook.com/...'

document.querySelectorAll('[data-facebook]').forEach((el) => {
  if (FACEBOOK_URL && FACEBOOK_URL !== '#') {
    el.setAttribute('href', FACEBOOK_URL);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');
  } else {
    el.setAttribute('title', 'Lien Facebook à configurer dans script.js');
  }
});

// --- Menu mobile ---
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

if (burger && nav) {
  const closeNav = () => {
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Ouvrir le menu');
  };
  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  });
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeNav));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeNav(); });
}

// --- Panneaux dépliables (en savoir plus produits / découvrir notre histoire) ---
function setupToggle(btnId, panelId, scrollIntoView) {
  const btn = document.getElementById(btnId);
  const panel = document.getElementById(panelId);
  if (!btn || !panel) return;
  btn.addEventListener('click', () => {
    const open = panel.hasAttribute('hidden');
    if (open) panel.removeAttribute('hidden');
    else panel.setAttribute('hidden', '');
    btn.setAttribute('aria-expanded', String(open));
    if (open && scrollIntoView) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}
setupToggle('prod-toggle', 'prod-more', false);
setupToggle('story-toggle', 'story-more', true);

// --- Année footer ---
const yearEl = document.getElementById('foot-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
