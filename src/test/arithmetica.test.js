const { add, subtract, multiply, divide } = require("../arithmetica");

// Addition tests
test('2 + 3 is equal to 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('50 + 30 is equal to 80', () => {
    expect(add(50, 30)).toBe(80);
});

test('60 + 100 is equal to 160', () => {
    expect(add(60, 100)).toBe(160);
});

// Subtraction tests
test('5 - 3 is equal to 2', () => {
    expect(subtract(5, 3)).toBe(2);
});

test('50 - 30 is equal to 20', () => {
    expect(subtract(50, 30)).toBe(20);
});

test('100 - 60 is equal to 40', () => {
    expect(subtract(100, 60)).toBe(40);
});

// Multiplication tests
test('2 * 3 is equal to 6', () => {
    expect(multiply(2, 3)).toBe(6);
});

test('5 * 5 is equal to 25', () => {
    expect(multiply(5, 5)).toBe(25);
});

test('10 * 10 is equal to 100', () => {
    expect(multiply(10, 10)).toBe(100);
});

// Division tests
test('6 / 3 is equal to 2', () => {
    expect(divide(6, 3)).toBe(2);
});

test('25 / 5 is equal to 5', () => {
    expect(divide(25, 5)).toBe(5);
});

test('100 / 10 is equal to 10', () => {
    expect(divide(100, 10)).toBe(10);
});
