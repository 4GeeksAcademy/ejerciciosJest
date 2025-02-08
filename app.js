const sum= (a,b) => {
    return a + b
}

console.log(sum(14,9))

// Declaramos la función fromEuroToDollar
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

// Nueva función fromDollarToYen
const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / 1.07; // Primero, convertimos de dólares a euros
    let valueInYen = valueInEuro * 156.5; // Convertimos de euros a yenes
    return valueInYen;
}

// Nueva función fromYenToPound
const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / 156.5; // Primero, convertimos de yenes a euros
    let valueInPound = valueInEuro * 0.87; // Convertimos de euros a libras esterlinas
    return valueInPound;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };