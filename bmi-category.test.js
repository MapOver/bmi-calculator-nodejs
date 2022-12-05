const getBMICategory = require('./bmi-category');

test('TC1: Invalid input', () => {
  expect(getBMICategory(NaN)).toBe(NaN);
});

test('TC2: Underweight', () => {
    expect(getBMICategory(18.4)).toBe("Underweight");
});

test('TC3: Healthy weight', () => {
    expect(getBMICategory(20)).toBe("Healthy weight");
});

test('TC4: Overweight', () => {
    expect(getBMICategory(27)).toBe("Overweight");
});

test('TC5: Obese', () => {
    expect(getBMICategory(35)).toBe("Obese");
});