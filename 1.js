/**
 * @TODO : Création d'une fonction qui prend en paramètre une liste de nombres et qui retourne une liste de nombres dupliqués
 * @param L : number[] de nombres
 * @returns {boolean} : liste de nombres dupliqués
 */
function estTrie(L) {
    // Création de la variable pour stocker le nombre actuel
    for (let i = 0; i < L.length - 1; i++) {
        // Si le nombre actuel est supérieur au nombre suivant, la liste n'est pas triée
        if (L[i] > L[i + 1]) {
            // Retourner false
            return false;
        }
    }
    // SI la liste est triée, retourner true
    return true;
}

estTrie([1, 2, 3, 4, 5]); // true
estTrie([1, 2, 3, 5, 4]); // false