const Convert = require("./Convert");

//celsius
const Celsius = new Convert;
//test celsius to reamur
test('test cel to rea', () => {
    expect(Celsius.fromCelsius('rea', 123)).toBe(98.4);
});
//test celsius to celsius
test('test cel to cel', () => {
    expect(Celsius.fromCelsius('cel', 20)).toBe(20);
});
//test celsius to fahrenheit
test('test cel to fah', () => {
    expect(Celsius.fromCelsius('fah', 21)).toBe(69.80000000000001);
});

//reamur
const Reamur = new Convert();
//test reamur to celsius
test('test rea to cel', () => {
    expect(Reamur.fromReamur('cel', 123)).toBe(153.75);
});
//test reamur to reamur
test('test rea to rea', () => {
    expect(Reamur.fromReamur('rea', 12)).toBe(12);
});
//test reamur to fahrenheit
test('test rea to fah', () => {
    expect(Reamur.fromReamur('fah', 50)).toBe(144.5);
});

//fahrenheit
const Fahrenheit = new Convert();
//test fahrenheit to Celsius
test('test fah to cel', () => {
    expect(Fahrenheit.fromFahrenheit('cel', 20)).toBe(-6.666666666666667);
});
//test fahrenheit to fahrenheit
test('test fah to fah', () => {
    expect(Fahrenheit.fromFahrenheit('fah', 25)).toBe(25);
});
//test fahrenheit to reamur
test('test fah to rea', () => {
    expect(Fahrenheit.fromFahrenheit('rea', 20)).toBe(-5.333333333333333);
});

