function jourTravaille(date) {
    // Liste des jours fériés en 2024
    const joursFeries2024 = [
        new Date('2024-01-01'), // Jour de l'An
        new Date('2024-04-01'), // Lundi de Pâques
        new Date('2024-05-01'), // Fête du Travail
        new Date('2024-05-08'), // Victoire 1945
        new Date('2024-07-14'), // Fête Nationale
        new Date('2024-08-15'), // Assomption
        new Date('2024-11-01'), // Toussaint
        new Date('2024-12-25')  // Noël
    ];

    // Vérifier si la date est un jour férié
    for (let jourFerie of joursFeries2024) {
        if (date.getDate() === jourFerie.getDate() &&
            date.getMonth() === jourFerie.getMonth() &&
            date.getFullYear() === jourFerie.getFullYear()) {
            console.log(`Le ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} est un jour férié`);
            return;
        }
    }

    // Vérifier si la date est un week-end (samedi ou dimanche)
    if (date.getDay() === 6 || date.getDay() === 0) {
        console.log(`Non, ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} est un week-end`);
    } else {
        // Sinon, c'est un jour travaillé
        console.log(`Oui, ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} est un jour travaillé`);
    }
}

// Exemple d'utilisation :
const maDate = new Date('2024-05-01'); // Fête du Travail
jourTravaille(maDate);

const uneAutreDate = new Date('2024-03-12'); // Un jour normal
jourTravaille(uneAutreDate);