export default class SiteHeader {
  constructor(el) {
    this.el = el;
    this.toggle = el.querySelector('.site-header__toggle');
    this.nav = el.querySelector('.site-header__nav');
    this._onToggle = this._onToggle.bind(this);
    this._onNavClick = this._onNavClick.bind(this);
    this._onKey = this._onKey.bind(this);
  }

  init() {
    this.toggle.addEventListener('click', this._onToggle);
    this.nav.addEventListener('click', this._onNavClick);
    document.addEventListener('keydown', this._onKey);
  }

  destroy() {
    this.toggle.removeEventListener('click', this._onToggle);
    this.nav.removeEventListener('click', this._onNavClick);
    document.removeEventListener('keydown', this._onKey);
  }

  _setOpen(open) {
    this.el.classList.toggle('is-open', open);
    this.toggle.setAttribute('aria-expanded', String(open));
    this.toggle.querySelector('.visually-hidden').textContent = open ? 'Fermer le menu' : 'Ouvrir le menu';
    document.documentElement.style.overflow = open ? 'hidden' : '';
  }

  _onToggle() { this._setOpen(!this.el.classList.contains('is-open')); }

  _onNavClick(e) { if (e.target.closest('a')) this._setOpen(false); }

  _onKey(e) {
    if (e.key === 'Escape' && this.el.classList.contains('is-open')) {
      this._setOpen(false);
      this.toggle.focus();
    }
  }
}
