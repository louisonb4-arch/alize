# LEGAL-TODO — M'Alizé, pêche artisanale (Dieppe)

> **Ne pas mettre en ligne avant d'avoir traité la section 1.**
> État au 17 juillet 2026. Aucune donnée n'a été inventée : tout ce qui n'a pas pu être
> vérifié à une source est marqué `[à fournir]` / `[à confirmer]` et apparaît **en
> surbrillance rose sur le site lui-même**, exprès — pour qu'un trou se voie au lieu de se
> combler avec une supposition.

---

## 0. Lire d'abord : ce n'est pas une société

L'éditeur est une **entreprise individuelle** (code INSEE 1000), pas une société. Cela change
la structure des mentions légales :

- **Pas de capital social**, **pas de dénomination sociale**, **pas de RCS de société.**
  Ces lignes n'ont pas été laissées vides : **elles n'ont pas été écrites du tout**, parce
  qu'elles n'existent pas pour cette forme juridique. Ne pas les « compléter » : il n'y a rien
  à y mettre. Une EI est identifiée par son **SIREN** au registre national des entreprises.
- **L'éditeur est une personne physique : Jérôme Féron**, patron-pêcheur.
- **« M'Alizé » est le nom du BATEAU** (immatriculation **DP 695288**), **pas** celui de
  l'entreprise. Le registre ne fait apparaître **aucune dénomination ni aucun nom commercial
  déclaré**. Le site ne présente donc jamais « M'Alizé » comme une raison sociale.
- Greffe compétent en cas de besoin : **Dieppe (Seine-Maritime)**.

---

## 1. Bloquant avant la mise en ligne

### 1.1 Identité de l'éditeur (`mentions-legales.html`)

| Donnée | État |
|---|---|
| E-mail | **manquant** — apparaît dans les mentions légales, la confidentialité, le bloc accessibilité et « nous écrire ». C'est le seul canal écrit exigible ; à défaut, seul le téléphone est publié. |
| TVA intracommunautaire | **à trancher avec le comptable** — voir § 1.2 |
| Directeur de la publication | **à confirmer** — voir § 1.3 |
| Quai de vente vs adresse déclarée | **à confirmer** — voir § 1.4 |

Le téléphone (**06 22 13 57 13**) est repris du site actuel : il est déjà publié par le client
et renseigné partout. Vérifié dans le HTML existant.

### 1.2 TVA — ne pas publier le numéro sans confirmation

**Aucun numéro de TVA intracommunautaire ne figure au registre** pour cet éditeur, ce qui est
cohérent avec une **franchise en base de TVA**. Le site affiche donc
`[à fournir — le cas échéant]` et **n'affirme aucun numéro**.

> ⚠️ **Anomalie relevée dans la fiche de relevé.** La fiche `malize-v3.json` contient un champ
> `"tva": "FR02504828575"`. **Ce n'est pas une donnée déclarée au registre** : c'est le numéro
> *calculé* par l'algorithme officiel à partir du SIREN
> (clé = `(12 + 3 × (SIREN mod 97)) mod 97` = `02` pour 504 828 575 — vérifié). Il est généré
> pour **tout** SIREN, assujetti ou non. **Le publier reviendrait à affirmer un assujettissement
> à la TVA qui n'est pas établi.** Il n'a donc pas été repris.

À trancher : soit l'entreprise est assujettie et le numéro doit être ajouté, soit elle est en
franchise en base et la mention **« TVA non applicable, article 293 B du CGI »** doit figurer
sur les factures (pas nécessairement sur le site).

### 1.3 Directeur de la publication

Le site affiche **Jérôme Féron**. C'est cohérent : pour une entreprise individuelle, le
directeur de la publication est l'entrepreneur lui-même, et le registre identifie
**FERON Jérôme Sébastien Pierre** comme seule personne physique à la tête de l'entreprise.
La mention est donc **écrite** (elle n'est pas inventée : elle est reprise du site existant et
concorde avec le registre), mais elle porte un `[à confirmer par l'éditeur]` — une simple
validation orale suffit à le lever.

### 1.4 Écart signalé, non gommé : « Les Barrières » ≠ Quai Gallieni

| Source | Adresse |
|---|---|
| **Registre national des entreprises** | Port de Dieppe, **Quai Gallieni**, 76200 Dieppe |
| **Site (vente à quai)** | secteur **« Les Barrières »**, Port de Dieppe (76200) |

Les deux **peuvent parfaitement coexister** : une adresse administrative n'est pas
nécessairement le point de vente. Le site les présente donc comme **deux choses distinctes**
(section 03 des mentions légales) et **ne présente pas le quai de vente comme le siège**.

**À confirmer par l'éditeur** : le quai « Les Barrières » est-il bien le point de vente, et
Quai Gallieni l'adresse administrative ? Si l'adresse déclarée n'est plus à jour, c'est le
registre qu'il faut corriger, pas le site.

### 1.5 Hébergeur (article 6 III-1 LCEN — obligatoire)

Nom, adresse, téléphone et site de l'hébergeur : **les quatre champs sont vides** dans
`mentions-legales.html`, et la durée de conservation des journaux est vide dans
`politique-confidentialite.html`.

> Constat factuel, pas une conclusion : les `<link rel="canonical">` et le `sitemap.xml`
> pointent aujourd'hui vers un sous-domaine **`alize.vercel.app`**. Cela **suggère** l'hébergeur
> mais ne l'établit pas, et le domaine définitif n'est pas arrêté. **Rien n'a été écrit à ce
> titre** : l'hébergeur doit être confirmé par le client, avec sa raison sociale exacte, son
> adresse et son téléphone.

Une fois l'hébergeur retenu, vérifier s'il implique un **transfert hors UE** (section 04 de
`politique-confidentialite.html`).

### 1.6 Photographies — aucun crédit

**Aucun crédit photographique ne figure nulle part** : ni sur le site, ni dans les noms de
fichiers (`hero.webp`, `p_35_3.webp`, `coast_bg2.webp`, `quay-bulots.webp`…). L'auteur des
images (bateau, pêcheur, produits, littoral) et l'étendue de la cession de droits (support,
durée, territoire) **ne sont pas documentés**.

À fournir avant la mise en ligne. Les personnes reconnaissables (le patron-pêcheur, le matelot)
doivent avoir donné leur autorisation au titre du droit à l'image.

### 1.7 Vérifier avant publication

```bash
grep -rn "à fournir\|à confirmer\|à trancher\|à vérifier" *.html   # ne doit plus rien renvoyer
```

---

## 2. LE POINT À TRANCHER : vente à distance ?

**C'est la vraie question juridique de ce site, et elle n'est pas tranchée à la place du
client.**

### Ce que le site dit réellement (vérifié)

- « **Livraison possible sur commande (tournées)** » — section « Où & comment acheter »
- « **Infos & commandes : 06 22 13 57 13** ou message sur la page Facebook » — *idem*
- « Livraison possible sur commande » — `<meta name="description">` et JSON-LD
- Une rubrique « **En complément, sur commande** » : moules de bouchot du Crotoy, dos de
  cabillaud, crevettes roses — produits de **partenaires locaux**, « proposés pour la livraison »

### Ce que le site fait techniquement (vérifié)

**Rien.** Pas de formulaire, pas de panier, pas de paiement, pas de champ de saisie. Le site
est une vitrine stricte. **Aucune commande ne se conclut sur le site lui-même.**

### Pourquoi c'est quand même un point à trancher

La vente à distance ne dépend pas de la technique du site, mais de **la façon dont le contrat
est conclu**. Si des commandes sont prises **et conclues** par téléphone ou par message
Facebook, sans présence physique simultanée des deux parties, alors l'activité relève des
**articles L221-1 et suivants du code de la consommation** — indépendamment de ce site.

Deux conséquences pour **l'entreprise** (pas pour le site) :

1. **Droit de rétractation** — information précontractuelle obligatoire. En pratique,
   l'**article L221-28 4°** du code de la consommation écarte ce droit pour « les biens
   susceptibles de se détériorer ou de se périmer rapidement » : **poisson et crustacés vivants
   sont couverts**. Mais l'exception doit être *invoquée et portée à la connaissance du
   consommateur* — elle ne joue pas toute seule. Attention : elle ne couvre pas
   nécessairement tout (un bien non périssable vendu en complément sortirait de l'exception).
2. **Médiateur de la consommation** — tout professionnel vendant à des consommateurs doit
   relever d'un médiateur (**article L612-1**). Si un médiateur est désigné, ses coordonnées
   doivent figurer dans les mentions légales.

> **Correction d'une citation erronée.** La consigne de départ citait « l'exception des denrées
> périssables, art. L221-28 **3°** ». C'est **4°**. Le 3° vise « les biens confectionnés selon
> les spécifications du consommateur ou nettement personnalisés » — sans rapport. Vérifié sur
> Légifrance le 17 juillet 2026 ; le site cite bien **L221-28 4°**.

### Ce qui a été fait, et ce qui ne l'a pas été

- ✅ Le site **décrit honnêtement** ce qu'il fait : vitrine, aucune commande en ligne, les
  commandes passent par téléphone/Facebook, hors du site (section 07 des mentions légales).
- ✅ Le point est **exposé explicitement** sur la page, en encadré, avec
  `[à trancher avec l'éditeur]`.
- ❌ **Aucune CGV n'a été rédigée.** Ce serait prématuré : il faut d'abord établir comment les
  commandes sont réellement prises et conclues (simple réservation à retirer à quai ? vente
  ferme livrée ? paiement à la livraison ?). Ces réponses déterminent le régime applicable.

**À trancher avec le client**, dans cet ordre :

1. Les commandes téléphone/Facebook sont-elles des **ventes conclues à distance**, ou de
   simples **réservations** retirées et payées à quai (auquel cas la vente est en présence, et
   le régime distance ne s'applique pas) ?
2. La livraison est-elle payée d'avance ou à la remise ?
3. Selon les réponses : rédiger des CGV + désigner un médiateur, ou n'en rien faire.

---

## 3. Ce qui a été vérifié (et n'est donc pas à redemander)

Relevé le **17 juillet 2026** au registre national des entreprises via l'API publique
`recherche-entreprises.api.gouv.fr` :

- Éditeur : **Jérôme Féron** (FERON Jérôme Sébastien Pierre) — personne physique
- Forme : **Entrepreneur individuel** (code INSEE 1000)
- Adresse déclarée : **Port de Dieppe, Quai Gallieni, 76200 Dieppe**
- SIREN : **504 828 575** · SIRET (établissement) : **504 828 575 00010**
- APE : **03.11Z — Pêche en mer**
- Immatriculation : **6 mai 2008**
- Coordonnées GPS du siège : **49.925307755, 1.0818375006**
- État administratif : **actif**
- Dénomination / sigle / nom commercial : **aucun déclaré**
- TVA : **aucune au registre** (voir § 1.2)

> **Cohérence confirmée avec le contenu du site.** Le récit de la page d'accueil dit que Jérôme
> Féron « s'installe à son compte en **mai 2008** » : cela concorde exactement avec la date
> d'immatriculation au registre (**6 mai 2008**). Le site et le registre racontent la même
> chose.

> **Écart GPS, sans conséquence.** Le JSON-LD d'`index.html` déclare `49.9294 ; 1.0836` (le
> point de vente), le registre `49.9253 ; 1.0818` (l'adresse déclarée). ~500 m d'écart, cohérent
> avec deux points distincts du même port. Rien à corriger, sauf si le § 1.4 conclut autrement.

---

## 4. Pages légales : ce qui a été créé, et ce qui ne l'a pas été

### Refondues (les noms de fichiers existants ont été conservés)

| Page | Pourquoi |
|---|---|
| `mentions-legales.html` | Obligatoire (art. 6 III LCEN). **Existait déjà, mais sous forme de gabarit à crochets** (`[NOM DE L'ENTREPRISE]`, `[FORME JURIDIQUE]`, `[SIRET]`, `[EMAIL]`, `[NOM DE L'HÉBERGEUR]`…). Les crochets ont été remplacés par les données réelles du registre ; les trous restants sont en surbrillance rose. |
| `politique-confidentialite.html` | Transparence RGPD. **Existait déjà en gabarit.** Contient désormais la section cookies avec l'ancre `#cookies`. |

> ⚠️ **Le gabarit précédent contenait une affirmation fausse.** L'ancienne page de
> confidentialité disait : « Ce site n'utilise que des cookies strictement nécessaires à son
> fonctionnement technique de base ». **C'est faux : le site ne dépose aucun cookie, pas même
> un cookie strictement nécessaire** (vérifié — voir § 5). L'affirmation a été corrigée.
> L'ancienne page annonçait aussi « ni prise de rendez-vous en ligne » sans jamais aborder la
> livraison sur commande.

> ⚠️ **Les deux pages étaient en `noindex`.** Elles sont passées en `index, follow` : des
> mentions légales doivent être trouvables. Elles sont aussi ajoutées au `sitemap.xml`
> (priority 0.2, lastmod 2026-07-17).

### Volontairement non créées

| Page | Pourquoi pas |
|---|---|
| **CGV** | Ce site ne vend rien, n'affiche aucun prix et n'encaisse rien. Rédiger des CGV serait prématuré tant que le § 2 n'est pas tranché. **Point signalé, pas rédigé.** |
| **CGU** | Aucun compte, aucun contenu déposé par l'utilisateur, aucun service interactif. Sans objet. |
| **Bannière de consentement cookies** | Voir § 5 : aucun cookie n'est déposé, il n'y a rien à consentir. |
| **Section « Vente d'alcool »** | L'établissement ne vend pas d'alcool. Sans objet. |

---

## 5. Cookies, traceurs, données — le constat réel

### Ce que le site fait, vérifié le 17 juillet 2026

| | |
|---|---|
| Cookies déposés | **aucun** — aucune occurrence de `cookie` dans le code |
| Stockage local | **aucun** — ni `localStorage`, ni `sessionStorage` |
| Mesure d'audience | **aucune** — ni `gtag`, ni `analytics`, ni `dataLayer`, ni `fbq` |
| Pixel publicitaire | **aucun** |
| Formulaires | **aucun** — aucune balise `<form>`, aucun champ de saisie |
| Iframes / widgets | **aucun** — aucune balise `<iframe>` |
| Comptes utilisateurs | **aucun** |
| Paiement | **aucun** |
| **Sous-ressources externes** | **zéro** — vérifié tag par tag (`script`, `img`, `iframe`, `source`, `link`…) : **aucune** ne pointe hors du domaine |

Les seules URL externes du site sont des **liens sortants `<a>`**, qui ne chargent rien tant
qu'on ne clique pas : la page Facebook du bateau, `vokumagency.com`, `cnil.fr`,
`recherche-entreprises.api.gouv.fr`, `openfontlicense.org`.

### Pourquoi il n'y a pas de bannière

L'article 82 de la loi Informatique et Libertés impose le consentement **avant tout dépôt de
cookie non strictement nécessaire**. Aucun cookie n'étant déposé, **il n'y a rien à consentir**.
Une bannière serait une gêne sans objet. C'est un choix argumenté, pas un oubli.

**Ce qui déclencherait l'obligation d'en poser une :**

- ajouter Google Analytics, Matomo (en mode non exempté), un pixel Meta ou tout traceur ;
- **intégrer une carte en `<iframe>`** (aujourd'hui il n'y a aucune carte intégrée — la
  section « littoral » est une **image** avec des repères en CSS, pas une carte tierce) ;
- **intégrer un widget Facebook** (aujourd'hui c'est un simple lien sortant, exprès) ;
- ajouter un formulaire de commande ou de contact ;
- **recharger les polices depuis Google Fonts** — voir ci-dessous.

### Polices — ce qui a changé le 17 juillet 2026

Le site chargeait **Anton, Cormorant Garamond, Oswald, Barlow et Caveat depuis les serveurs de
polices de Google**, sur les trois pages. Chaque visite transmettait donc l'adresse IP du
visiteur à Google, **sans consentement** — le point précis sur lequel la CNIL et plusieurs
autorités européennes ont sanctionné des éditeurs, et qui aurait imposé une bannière.

Les cinq familles sont désormais **auto-hébergées** dans `img/font/` :

| Famille | Type | Poids | Rôle |
|---|---|---|---|
| Anton | statique | 400 | titres |
| Oswald | **variable** | 400–700 | labels, navigation |
| Barlow | statique | 400 / 500 / 600 | corps de texte |
| Cormorant Garamond | **variable** | 300–700 (romain + italique) | récit |
| Caveat | **variable** | 400–700 | manuscrit |

Sous-ensembles **latin + latin-ext** uniquement, `font-display: swap`, **16 fichiers, ~390 Ko**.
Licence : **SIL Open Font License 1.1** pour les cinq (vérifié : les cinq familles sont dans le
répertoire `ofl/` du dépôt `google/fonts`).

Les `<link>` et `<preconnect>` vers Google ont été retirés des **trois** pages, les `@font-face`
ajoutés en tête de `styles.css`, et deux `<link rel="preload">` (Anton + Barlow 400) ajoutés
sur chaque page.

**Test de non-régression :**

```bash
grep -rn 'googleapis\|gstatic' . --include='*.html' --include='*.css'   # doit être vide
```

---

## 6. Produits de la pêche — information consommateur réglementée

Le site **annonce des espèces sans afficher de prix** : bulots vivants, homards bleus, bouquets
vivants (crevettes roses et grises), seiches, poissons de saison ; et, en complément sur
commande, moules de bouchot du Crotoy, dos de cabillaud, crevettes roses.

> Seule trace tarifaire : `"priceRange": "€€"` dans le JSON-LD d'`index.html`. C'est une
> fourchette indicative pour les moteurs, pas un prix. **Aucun prix n'est affiché aux
> visiteurs.**

Le **règlement (UE) n° 1379/2013** (art. 35) impose, pour les produits de la pêche **mis en
vente au consommateur final**, d'indiquer :

- la **dénomination commerciale** de l'espèce **et son nom scientifique** ;
- la **méthode de production** (« pêché… ») ;
- la **zone de capture** (pour la Manche : zone FAO 27 + sous-zone) ;
- la **catégorie d'engin de pêche** ;
- le cas échéant, la mention **« décongelé »**.

**Cette obligation vise le point de vente, pas ce site vitrine** — elle doit donc être assurée
**à quai** (affichage, étiquetage). Le site le dit explicitement (section 08 des mentions
légales) et le marque `[à vérifier — affichage réglementaire au point de vente à quai]`.

**À signaler au client :**

- [ ] Vérifier que l'affichage à quai comporte bien les cinq mentions (le site indique déjà
      l'engin — « pêche au casier » — et une zone approximative — « au large de Dieppe » — mais
      **aucun nom scientifique**).
- [ ] ⚠️ **Si des prix ou une carte des produits sont un jour publiés sur ce site**, ces
      mentions devront y figurer aussi. C'est le principal risque d'évolution de cette page.
- [ ] Les **produits de partenaires** (moules du Crotoy, cabillaud, crevettes) sont revendus :
      leur traçabilité et leur étiquetage relèvent aussi de l'éditeur au stade de la remise au
      consommateur.
- [ ] La page d'accueil affirme une **taille minimale du bulot de 4,5 cm** et un encadrement de
      la ressource par « quotas, nombre de casiers et de jours en mer ». **Non vérifié ici** :
      c'est une allégation réglementaire qui engage l'éditeur, à faire confirmer par lui (ou par
      le comité des pêches) — pas à corriger sur la foi de ce document.

---

## 7. À vérifier après la mise en ligne

- [ ] `grep -rn "à fournir\|à confirmer\|à trancher\|à vérifier" *.html` ne renvoie plus rien
- [ ] `grep -rn 'googleapis\|gstatic' . --include='*.html' --include='*.css'` est vide
- [ ] `robots.txt`, `sitemap.xml` et les `canonical` pointent le **vrai domaine**
      (aujourd'hui `alize.vercel.app` — domaine définitif non arrêté)
- [ ] Aucune requête tierce dans l'onglet Réseau
- [ ] `document.cookie` est vide
- [ ] Le bloc hébergeur est renseigné (§ 1.5) — **obligation LCEN**
- [ ] Le site est déclaré dans Google Search Console
- [ ] La page Facebook du bateau est cohérente avec les infos du site
