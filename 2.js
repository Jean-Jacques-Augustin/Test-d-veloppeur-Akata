/**
 * La fonction jourAuFutur() prend en paramètre le jour actuel et le nombre de jours à ajouter
 * @param J: le jour actuel
 * @param A :le nombre de jours à ajouter
 * @returns {string} le jour de la semaine correspondant au jour actuel
 */

function jourAuFutur(J, A) {
    // création de tableau pour stocker les jours de la semaine
    let days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    // création de variable pour stocker le jour actuel
    let futureDay = (J + A - 1) % 7;
    // retourner le jour de la semaine correspondant au jour actuel
    return days[futureDay];
}


jourAuFutur(2, 8); // "Mercredi"
jourAuFutur(1, 2); // "Mercredi"
jourAuFutur(1, 3); // "Jeudi"