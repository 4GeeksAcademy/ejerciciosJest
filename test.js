// Importamos las funciones desde app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Prueba para convertir euros a dólares
test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

// Prueba para convertir dólares a yenes
test("One dollar should be 156.5 yen", function() {
    const yen = fromDollarToYen(1); // Debería ser igual a 1 dólar a yenes
    const expected = 1 * 156.5; // 1 dólar es 156.5 yenes
    expect(yen).toBe(expected);
});

test("10 dollars should be 1565 yen", function() {
    const yen = fromDollarToYen(10); // 10 dólares a yenes
    const expected = 10 * 156.5; // 10 dólares son 1565 yenes
    expect(yen).toBe(expected);
});

// Prueba para convertir yenes a libras esterlinas
test("One yen should be 0.00557 pounds", function() {
    const pounds = fromYenToPound(1); // Debería ser igual a 1 yen a libras esterlinas
    const expected = 1 / 156.5 * 0.87; // 1 yen es 0.00557 libras esterlinas
    expect(pounds).toBeCloseTo(expected, 5); // Usamos toBeCloseTo por pequeñas imprecisiones
});

test("100 yen should be 0.557 pounds", function() {
    const pounds = fromYenToPound(100); // 100 yenes a libras esterlinas
    const expected = 100 / 156.5 * 0.87; // 100 yenes son 0.557 libras esterlinas
    expect(pounds).toBeCloseTo(expected, 5); // Usamos toBeCloseTo por pequeñas imprecisiones
});
