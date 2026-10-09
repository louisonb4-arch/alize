# M'Alizé — v4 « La livrée » (proposition)

Le site porte la peinture du bateau : coque turquoise `#149CA8`, liston jaune `#DDA53C`,
timonerie blanche `#F5F5F0`, immatriculation DP 695288. Sections claires = craie de la
Côte d'Albâtre (`#ECEDE6`), sections sombres = la Manche (`#0A3C43`).

- Polices (auto-hébergées, OFL) : Big Shoulders (lettrage de coque), Big Shoulders Stencil
  (marquage des caisses), Schibsted Grotesk (texte).
- Motion « marée » : images découvertes par le bas, titres qui sortent de la flottaison,
  liston qui s'étire, houle lente sous le hero. `prefers-reduced-motion` respecté.
- Un seul CTA : « Prochaines ventes ↗ » → page Facebook (`FACEBOOK_URL` dans `assets/js/app.js`).

## Avant mise en ligne
- Retirer `noindex` (meta des 3 pages + `X-Robots-Tag` dans `vercel.json`).
- Mentions légales : e-mail, hébergeur, crédits photo, vente à distance (cf. `LEGAL-TODO.md`).
- Photos : rendus fournis par le client. Remplacer par de vraies photos du bateau dès que possible.
- La v3 (`../malize-v3/`, dépôt `alize`) reste la version validée par le client tant que la v4 n'est pas choisie.

Preview locale : config `malize-v4` (port 8224) dans `../.claude/launch.json`.
