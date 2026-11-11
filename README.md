# Carnet → Forge

L'app d'entraînement a déménagé. Elle s'appelle maintenant **Forge** et vit dans ORGA :

- App : https://gottonic.github.io/orga/forge/
- Code et programme : dépôt [Gottonic/orga](https://github.com/Gottonic/orga), dossier `forge/` (le programme est `forge/programme.json`)

Ce dépôt ne garde qu'une page qui renvoie vers la nouvelle adresse, et un service worker qui nettoie l'ancienne app sur les appareils.
Les données n'ont pas bougé : table `carnet` et dossier privé `carnet` dans Supabase.

**Pour Claude** : ne plus rien publier ici. Les mises à jour du code et du programme se font dans `Gottonic/orga`, dossier `forge/`.
À chaque mise à jour du code, changer `VERSION` dans `orga/sw.js`.
