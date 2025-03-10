function bisextile(annee) {
    return (annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0);
}

// Test de la fonction avec plusieurs années
console.log(bisextile(2024)); // true (bissextile)
console.log(bisextile(2023)); // false (non bissextile)
console.log(bisextile(2000)); // true (bissextile)
console.log(bisextile(1900)); // false (non bissextile)