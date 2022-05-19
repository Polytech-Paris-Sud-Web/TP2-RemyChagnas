# Tp2

Voici mon tp2.

URL web sur un vps OVH : https://front.remychagnas.fr/

/!\ Seules les données consultées sont dans le cache, la bdd n'est pas dans le cache car il y aurait des problèmes dans le cas d'une bdd plus volumineuse.

Content of deploy.sh :

```
#!/bin/bash
cd web/TP2-RemyChagnas/
git pull
sudo docker compose down
sudo docker compose up --build -d
```

## Collaboration

- On a beaucoup discuté pour la CD avec Tom Mansion

## Aide pour le TP

- J'ai aidé : Tom Mansion, Nathan Pinault
- M'a aidé(e) : Tom Mansion

## Difficultés rencontrées

1. Problème de type entre string et String en typescript
2. Mise en place du service-worker : problème avec mon serveur à cause du service-worker en localhost

## Installation

1. ```npm install```

## Lancement BDD

2. ```json-server --watch src/app/db.json```

## Lancement APP

3. ```ng serve```