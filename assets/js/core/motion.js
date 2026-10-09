/* =========================================================================
   M'Alizé — runtime motion (base Vokum)
   Vanilla, zéro dépendance.
   ========================================================================= */

/* -------------------------------------------------------------------------
   0. Garde-fou global
   ------------------------------------------------------------------------- */

export const motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* -------------------------------------------------------------------------
   1. Détection viewport — lecture seule, batchée
   ------------------------------------------------------------------------- */

export const inViewport = (el) => {
  const r = el.getBoundingClientRect();
  return r.top < innerHeight && r.bottom > 0 && r.left < innerWidth && r.right > 0;
};

/* -------------------------------------------------------------------------
   2. moduleDelays — le cœur du système
   Attribue un --module-delay croissant aux SEULS blocs visibles au chargement.
   Les blocs hors écran passent à "false" et attendront l'IntersectionObserver.

   Sans ce filtrage, le 4e bloc d'une page hérite d'un délai de 3s
   et le site paraît cassé.
   ------------------------------------------------------------------------- */

export const moduleDelays = (increment = 350, base = 550, target = document.body) => {
  const els = [...target.querySelectorAll('[data-module-delay]')];

  // 1) LECTURE en batch — aucune écriture ici, sinon layout thrashing
  const visibility = els.map(inViewport);

  // 2) ÉCRITURE en batch
  let delay = base;
  els.forEach((el, i) => {
    const visible = visibility[i];
    el.setAttribute('data-module-delay', visible);
    if (!visible) return;
    el.style.setProperty('--module-delay', `${delay}ms`);
    delay += el.dataset.moduleDelayIncrement
      ? parseInt(el.dataset.moduleDelayIncrement, 10)
      : increment;
  });
};

/* -------------------------------------------------------------------------
   3. setSelfDelays — au-delà de 6 enfants, le CSS nth-child ne suffit plus
   ------------------------------------------------------------------------- */

export const setSelfDelays = (container, step = 90) => {
  [...container.querySelectorAll('[data-reveal]')].forEach((el, i) => {
    el.style.setProperty('--self-delay', `${i * step}ms`);
  });
};

/* -------------------------------------------------------------------------
   4. splitWords — masque par mot, sans Splitting.js
   <h1 data-split>Bonjour</h1>
   →  <h1 data-split aria-label="Bonjour">
        <span class="word" aria-hidden="true" style="--word-i:0">
          <span class="word__inner">Bonjour</span>
        </span>
      </h1>

   Le mot est le masque (overflow:hidden), son contenu monte depuis le bas.
   aria-label préserve la lecture par lecteur d'écran ; les spans sont masqués.
   ------------------------------------------------------------------------- */

export const splitWords = (el) => {
  if (el.dataset.splitDone) return;

  // Les <br> du HTML sont conservés : ce sont des coupes de ligne voulues
  const lines = el.innerHTML.split(/<br\s*\/?>/i)
    .map((l) => { const t = document.createElement('div'); t.innerHTML = l; return t.textContent.trim().replace(/\s+/g, ' '); })
    .filter(Boolean);
  el.setAttribute('aria-label', lines.join(' '));

  let i = 0;
  el.innerHTML = lines.map((line) => line.split(' ').map((word) =>
    `<span class="word" aria-hidden="true" style="--word-index:${i++}">` +
    `<span class="word__inner">${word}</span></span>`
  ).join(' ')).join('<br>');

  el.style.setProperty('--word-total', i);
  el.dataset.splitDone = 'true';
};

/* -------------------------------------------------------------------------
   5. Observer — un seul pour tout le site
   ⚠ Observer le PARENT quand l'enfant porte un clip-path masquant :
     un clip-path à 100% empêche l'IO de fire.
   ------------------------------------------------------------------------- */

let observer = null;

export const observe = (root = document) => {
  if (motionReduced) return;

  observer ||= new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-inview');
      observer.unobserve(entry.target);           // one-shot : pas de re-trigger
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0 });

  root.querySelectorAll('[data-reveal], [data-split]').forEach(el => observer.observe(el));
};

/* -------------------------------------------------------------------------
   6. Séquence d'ouverture
   ------------------------------------------------------------------------- */

export const boot = ({ base = 550, step = 350, loader = '[data-site-loader]' } = {}) => {
  // splitting AVANT le calcul des délais : le split change la hauteur
  document.querySelectorAll('[data-split]').forEach(splitWords);

  const onReady = () => {
    // 1. délais des blocs visibles au chargement
    moduleDelays(step, base);

    if (!motionReduced) document.documentElement.classList.add('--js-inview-enabled');

    // 2. lancer la cascade d'ouverture.
    //    Pas de double-rAF nécessaire : les animations sont en play-state:paused
    //    avec fill-mode:backwards, donc l'état initial est déjà peint.
    document.querySelectorAll(
      '[data-module-delay="true"][data-reveal],' +
      '[data-module-delay="true"] [data-reveal],' +
      '[data-module-delay="true"] [data-split]'
    ).forEach(el => el.classList.add('is-inview'));

    // 3. l'observer prend le relais pour TOUT le reste de la page.
    //    moduleDelays() ne fait que marquer "false" — il ne déclenche rien.
    //    Les deux systèmes sont indépendants : c'est ce qui permet de se passer
    //    d'un routeur type Windmill.
    observe();

    // 4. retirer le loader
    const el = document.querySelector(loader);
    if (!el) return;
    el.classList.add('--js-ready');
    el.addEventListener('transitionend', () => el.remove(), { once: true });
  };

  if (document.readyState === 'complete') onReady();
  else window.addEventListener('load', onReady, { once: true });
};
