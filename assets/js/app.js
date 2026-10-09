import { boot } from './core/motion.js';

// Lien Facebook centralisé — page trouvée par recherche, à confirmer par le client
const FACEBOOK_URL = 'https://www.facebook.com/p/Bateau-MAliz%C3%A9-100050654394732/';
document.querySelectorAll('[data-facebook]').forEach((a) => { a.href = FACEBOOK_URL; });

// Modules déclarés dans le HTML, chargés à la demande
document.querySelectorAll('[data-module],[data-ui]').forEach((el) => {
  const kind = el.dataset.ui ? 'ui' : 'modules';
  (el.dataset.ui || el.dataset.module).split(',').forEach(async (name) => {
    try {
      const { default: Mod } = await import(`./${kind}/${name.trim()}.js`);
      new Mod(el).init();
    } catch (err) {
      console.warn(`[malize] module "${name.trim()}" absent`, err);
    }
  });
});

// Ouverture : liston, puis le nom sort de la coque, puis le texte
boot({ base: 150, step: 300 });
