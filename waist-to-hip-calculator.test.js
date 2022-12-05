const waistToHipCalculator = require('./waist-to-hip-calculator');


test('TC1: Calculate correct ratio', () => {
    expect(waistToHipCalculator.calculateWaistToHipRatio(50, 100)).toBe(0.5);
});

test('TC1: Male, normal weight', () => {
    expect(waistToHipCalculator.getWaistToHipCategory("Male", 0.5)).toBe("normal weight");
});

test('TC1: Male, over weight', () => {
    expect(waistToHipCalculator.getWaistToHipCategory("Male", 0.97)).toBe("over weight");
});

test('TC1: Male, obese', () => {
    expect(waistToHipCalculator.getWaistToHipCategory("Male", 1.2)).toBe("obese");
});

test('TC1: Female, normal weight', () => {
    expect(waistToHipCalculator.getWaistToHipCategory("Female", 0.5)).toBe("normal weight");
});

test('TC1: Female, over weight', () => {
    expect(waistToHipCalculator.getWaistToHipCategory("Female", 0.83)).toBe("over weight");
});

test('TC1: Female, obese', () => {
    expect(waistToHipCalculator.getWaistToHipCategory("Female", 0.9)).toBe("obese");
});