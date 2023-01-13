# Test-d-veloppeur-Akata
## 1.js
1. Ecrire une fonction appelée "estTrie' qui permet de vérifier si une liste passée en paramètre est triée ou non.
Soit L une liste de nombre

Contrainte
La liste L contient au moins un nombre

Exemple: 

- L = [1, 2, 3], la fonction estTrie retournera true parce que la liste est triée
- L = [2, 1, 2] la fonction estTrie retournera false parce que la liste est triée

##2.js
2. Implémenter la fonction "jourAuFutur" avec le paramètre recquis.
Soit J un nombre qui correspond au jour de la semaine(1=Lundi, 2=Mardi, 3=Mercredi, 4=Jeudi, 5=Vendredi, 6=Samedi, 7=Dimanche), soit A un nombre qu'on ajoute à J de facon que J+A retourne le jour de la semaine dans le futur.

Contrainte 
0<J<8 et 0<A<366.

Ecrire une fonction appelée jourAuFutur pour que la fonction retourne le jour(Lundi, Mardi, Mercredi, etc...) J+A.

Exemple:

- J=1(Lundi), A=7 la fonction jourAuFutur retourne Lundi car 7 jours après Lundi est toujours Lundi
- J=2(Mardi), A=5 la fonction jourAuFutur retourne Dimanche car 5 jours après Mardi est Dimanche
- J=7(Dimanche), A=15 la fonction jourAuFutur retourne Lundi car 15 jours après Dimanche est Lundi

## 3.js
3. Ecrire une fonction appelée "duplication" qui retournera une liste de tous les nombres dupliqués sur une liste, un nombre est dupliqué s'il se trouve au moins 2 fois sur une liste. On retourne une liste vide si aucune duplication n'a eté trouvée.
Soit L une liste de nombre passé en paramètre avec la fonction duplication.

Contrainte
La liste L contient au moins un nombre

Exemple:
- [1, 1, 2, 3] la fonction duplication retournera [1] car le nombre 1 est dupliqué
- [1, 3, 4] la fonction duplication retournera [], c'est-à-dire une liste vide parce qu'aucun nombre n'est répété
- [2, 2, 4, 5, 4, 6, 4]  la fonction duplication retournera [2, 4] parce que le nombre 2 et 4 est répété

## 4.sql
4. Ecrire l'instruction SQL qui permet de créer les tables pour la description suivante. Vous pouvez soit utiliser une instruction pour PostgreSQL, SQLServer ou MySQL. Pour la question numéro 4, le fichier à mettre sur le repository doit s'appeler "4.sql".
Un Etudiant a un:
- nom
- prenom
- age
- numero immatriculation qui permet de lui identifier


Une matière a un:
- identification qui permet de l'identifier (exemple: ALG pour la matiére algorithme et STAT pour la statistique)
- nom (exemple: algorithme)
- coefficient

Une note qui est composée de:
- l'étudiant
- la matière
- valeur qui corresponds à la note obtenue par un étudiant pour une matière
