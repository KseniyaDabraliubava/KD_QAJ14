import { Calculator } from '../calc';

describe('Calculator - Jest', () => {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('add() method', () => {
        describe('Basic functionality', () => {
            test('Return 0 when called with no arguments', () => {
                expect(calculator.add()).toBe(0);
            });

            test('Return the same number when called with one argument', () => {
                expect(calculator.add(5)).toBe(5);
                expect(calculator.add(-3)).toBe(-3);
                expect(calculator.add(0)).toBe(0);
            });

            test('Correctly add numbers', () => {
                expect(calculator.add(1, 2, 3, 4, 5)).toBe(15);
                expect(calculator.add(10, -5, 3, -2)).toBe(6);
                expect(calculator.add(-10, -20)).toBe(-30);
            });
        });

        describe('Decimal numbers', () => {
            test('should correctly add mixed integers and decimals', () => {
                expect(calculator.add(5, 2.5, 3)).toBe(10.5);
            });
        });

        describe('Special cases', () => {
            test('should handle Infinity', () => {
                expect(calculator.add(Infinity, 5)).toBe(Infinity);
                expect(calculator.add(-Infinity, 5)).toBe(-Infinity);
            });

            test('should handle NaN', () => {
                expect(calculator.add(NaN, 5)).toBeNaN();
            });

            test('should handle mix of normal and special values', () => {
                expect(calculator.add(1, 2, 3, Infinity)).toBe(Infinity);
            });
        });
    });

    describe('divide() method', () => {
        describe('Basic functionality', () => {
            test('Correctly divide numbers', () => {
                expect(calculator.divide(10, 2)).toBe(5);
                expect(calculator.divide(7, 2)).toBe(3.5);
                expect(calculator.divide(100, 100)).toBe(1);
            });
        });

        describe('Negative numbers', () => {
            test('Correctly divide negative numbers', () => {
                expect(calculator.divide(10, -2)).toBe(-5);
                expect(calculator.divide(-10, 2)).toBe(-5);
                expect(calculator.divide(-10, -2)).toBe(5);
            });
        });

        describe('Zero handling', () => {
            test('Error when dividing by zero', () => {
                expect(() => calculator.divide(10, 0)).toThrow('Can not devide by zero');
            });

            test('Return 0 when dividing zero by any number', () => {
                expect(calculator.divide(0, 5)).toBe(0);
                expect(calculator.divide(0, -5)).toBe(-0);
            });
        });

        describe('Decimal numbers', () => {
            test('should correctly divide decimal numbers', () => {
                expect(calculator.divide(5.5, 2.5)).toBeCloseTo(2.2, 5);
            });

            test('Correctly divide integer by decimal', () => {
                expect(calculator.divide(10, 2.5)).toBe(4);
            });
        });

        describe('Special values', () => {
            test('Infinity dividend', () => {
                expect(calculator.divide(Infinity, 5)).toBe(Infinity);
                expect(calculator.divide(-Infinity, 5)).toBe(-Infinity);
            });

            test('Infinity divisor', () => {
                expect(calculator.divide(5, Infinity)).toBe(0);
            });

            test('NaN', () => {
                expect(calculator.divide(NaN, 5)).toBeNaN();
                expect(calculator.divide(5, NaN)).toBeNaN();
            });

            test('Infinity divided by Infinity', () => {
                expect(calculator.divide(Infinity, Infinity)).toBeNaN();
            });
        });
    });
});
