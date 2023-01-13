/**
 * TODO : Création d'une fonction qui prend en paramètre une liste de nombres et qui retourne une liste de nombres dupliqués
 * @param L : number[] => tableau de nombres
 * @returns {*[]} : number[] => tableau de nombres triés
 */
function duplication(L) {
    // Création de l'objet diplicates pour stocker les valeurs dupliquées
    let duplicates = {};
    // Création de l'objet unique pour stocker les valeurs uniques
    let result = [];
    // Parcourir la liste
    for (let i = 0; i < L.length; i++) {
        // Si le nombre actuel n'est pas déjà dans l'objet duplicates, ajoutez-le
        if (!duplicates[L[i]]) {
            duplicates[L[i]] = true;
        } else {
            // Si le numéro actuel est déjà dans l'objet duplicate, ajoutez-le à la liste des résultats s'il n'est pas déjà présent
            if (!result.includes(L[i])) {
                result.push(L[i]);
            }
        }
    }
    return result;
}

duplication([1, 2, 3, 4, 5]); // []
duplication([1, 2, 3, 5, 4, 3, 2, 1]); // [1, 2, 3]