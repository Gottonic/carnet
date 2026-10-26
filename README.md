# Carnet Parkour

Mon carnet d'entraînement parkour : calendrier de la saison, séances de la semaine, charges, notes, tests et suivi.

- App : https://gottonic.github.io/carnet/
- Données : Supabase, même projet et même compte que L'Établi, mais une table à part (`carnet`) et un dossier de fichiers privé (`carnet`).
- Fonctionne hors ligne : les changements partent dès que le réseau revient.
- Le programme (blocs, séances, conseils) est dans `programme.json`. Quand Claude publie une nouvelle version, l'app l'installe toute seule à l'ouverture. Ton journal, tes charges et tes tests ne sont jamais dans ce dépôt.

## Mise en route (une seule fois)

### 1. Créer la table
Supabase → projet `etabli` → **SQL Editor** → **New query** → coller le contenu de `supabase/schema.sql` → **Run**.
Ça ne touche pas aux données de L'Établi.

### 2. Activer le site
GitHub → dépôt `carnet` → **Settings** → **Pages** → Source : **Deploy from a branch**,
branche `main`, dossier `/ (root)` → **Save**. Le site est en ligne après une minute environ.

### 3. Se connecter et récupérer ses données
1. Ouvrir l'app, se connecter avec le compte de L'Établi.
2. Dans l'ancien carnet (claude.ai) : **Données → Exporter les données**.
3. Dans la nouvelle app : **Données → Importer l'ancien carnet…** → choisir le fichier.
4. Toujours dans **Données** : **Importer le fichier .zip…** → choisir `medias-carnet.zip` (images d'exercices et GIF de climb-up, gardés en privé).

## Installer l'app

- **Fairphone** : ouvrir l'adresse dans le navigateur → menu → **Installer** ou **Ajouter à l'écran d'accueil**.
  L'app s'ouvre ensuite en plein écran, sans barre.
- **Ubuntu** : dans Chromium, Brave ou Vivaldi → icône d'installation dans la barre d'adresse.

## Bon à savoir

- Le badge en haut à droite indique l'état : ✓ enregistré, ↻ envoi en cours, hors ligne, ⚠ problème (toucher pour les détails).
- **Données → Exporter** crée un fichier avec tout le carnet : à envoyer à Claude pour un bilan, ou à garder comme sauvegarde.
- La base ne se met pas en veille : le signal automatique de L'Établi garde aussi ce projet éveillé.
- Les clés présentes dans le code (adresse du projet, clé « publishable ») sont faites pour être publiques.
  Ne jamais mettre ici la clé « secret / service_role » ni le mot de passe de la base.
