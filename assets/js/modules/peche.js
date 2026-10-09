// Aperçu des caisses : au survol (ou au focus) d'un produit, le cadre collant
// change d'image par fondu. Desktop seulement — en mobile, chaque caisse
// porte sa propre vignette.
export default class Peche {
  constructor(el) {
    this.el = el;
    this.crates = [...el.querySelectorAll('.crate[data-preview]')];
    this.images = [...el.querySelectorAll('.peche__preview-stack img')];
    this._onEnter = this._onEnter.bind(this);
  }

  init() {
    this.crates.forEach((c) => {
      c.addEventListener('pointerenter', this._onEnter);
      c.addEventListener('focusin', this._onEnter);
    });
    this._show(this.crates[0]);
  }

  destroy() {
    this.crates.forEach((c) => {
      c.removeEventListener('pointerenter', this._onEnter);
      c.removeEventListener('focusin', this._onEnter);
    });
  }

  _onEnter(e) { this._show(e.currentTarget); }

  _show(crate) {
    if (!crate) return;
    const key = crate.dataset.preview;
    this.crates.forEach((c) => c.classList.toggle('is-active', c === crate));
    this.images.forEach((img) => img.classList.toggle('is-active', img.dataset.for === key));
  }
}
