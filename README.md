# Tp2

Voici mon tp2.

URL web sur un vps OVH : https://front.remychagnas.fr/

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

- J'ai aidé : Tom Mansion, Léandre Becq
- M'a aidé(e) : Sophie Nguyen, Tom Mansion, Léandre Becq

## Difficultés rencontrées

1. Problème de type entre string et String en typescript

## Installation

1. ```npm install```

## Lancement BDD

2. ```json-server --watch src/app/db.json```

## Lancement APP

3. ```ng serve```