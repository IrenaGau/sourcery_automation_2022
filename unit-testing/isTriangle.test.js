const isTriangle = require('./isTriangle');

test('3, 4, 5 is triangle', () => {
    expect(isTriangle(3, 4, 5)).toBe(true);
});

test('0, 4, 5 is not triangle', () => {
    expect(isTriangle(0, 4, 5)).toBe(false);
});

test('-4, 4, 5 is not triangle', () => {
    expect(isTriangle(-4, 4, 5)).toBe(false);
});

test('A, 4, 5 is not triangle', () => {
    expect(isTriangle('A', 4, 5)).toBe(false);
});

test('10000000, 4, 5 is not triangle', () => {
    expect(isTriangle(10000000, 4, 5)).toBe(false);
});

test('6,5, 4, 5 is not triangle', () => {
    expect(isTriangle(6,5, 4, 5)).toBe(true);
});