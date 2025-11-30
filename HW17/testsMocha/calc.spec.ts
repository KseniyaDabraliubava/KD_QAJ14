import { expect } from 'chai';
import { Calculator } from '../calc';

describe('Calculator - Mocha + Chai', () => {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('add() method', () => {
        describe('Basic functionality', () => {
            it('Return 0 when called with no arguments', () => {
                expect(calculator.add()).to.equal(0);
            });

            it('Return the same number when called with one argument', () => {
                expect(calculator.add(5)).to.equal(5);
                expect(calculator.add(-3)).to.equal(-3);
                expect(calculator.add(0)).to.equal(0);
            });

            it('Correctly add numbers', () => {
                expect(calculator.add(1, 2, 3, 4, 5)).to.equal(15);
                expect(calculator.add(10, -5, 3, -2)).to.equal(6);
                expect(calculator.add(-10, -20)).to.equal(-30);
            });
        });

        describe('Decimal numbers', () => {
            it('should correctly add mixed integers and decimals', () => {
                expect(calculator.add(5, 2.5, 3)).to.equal(10.5);
            });
        });

        describe('Special cases', () => {
            it('should handle Infinity', () => {
                expect(calculator.add(Infinity, 5)).to.equal(Infinity);
                expect(calculator.add(-Infinity, 5)).to.equal(-Infinity);
            });

            it('should handle NaN', () => {
                expect(calculator.add(NaN, 5)).to.be.NaN;
            });

            it('should handle mix of normal and special values', () => {
                expect(calculator.add(1, 2, 3, Infinity)).to.equal(Infinity);
            });
        });
    });

    describe('divide() method', () => {
        describe('Basic functionality', () => {
            it('Correctly divide numbers', () => {
                expect(calculator.divide(10, 2)).to.equal(5);
                expect(calculator.divide(7, 2)).to.equal(3.5);
                expect(calculator.divide(100, 100)).to.equal(1);
            });
        });

        describe('Negative numbers', () => {
            it('Correctly divide negative numbers', () => {
                expect(calculator.divide(10, -2)).to.equal(-5);
                expect(calculator.divide(-10, 2)).to.equal(-5);
                expect(calculator.divide(-10, -2)).to.equal(5);
            });
        });

        describe('Zero handling', () => {
            it('Error when dividing by zero', () => {
                expect(() => calculator.divide(10, 0)).to.throw('Can not devide by zero');
            });

            it('Return 0 when dividing zero by any number', () => {
                expect(calculator.divide(0, 5)).to.equal(0);
                expect(calculator.divide(0, -5)).to.equal(-0);
            });
        });

        describe('Decimal numbers', () => {
            it('should correctly divide decimal numbers', () => {
                expect(calculator.divide(5.5, 2.5)).to.be.closeTo(2.2, 0.00001);
            });

            it('Correctly divide integer by decimal', () => {
                expect(calculator.divide(10, 2.5)).to.equal(4);
            });
        });

        describe('Special values', () => {
            it('Infinity dividend', () => {
                expect(calculator.divide(Infinity, 5)).to.equal(Infinity);
                expect(calculator.divide(-Infinity, 5)).to.equal(-Infinity);
            });

            it('Infinity divisor', () => {
                expect(calculator.divide(5, Infinity)).to.equal(0);
            });

            it('NaN', () => {
                expect(calculator.divide(NaN, 5)).to.be.NaN;
                expect(calculator.divide(5, NaN)).to.be.NaN;
            });

            it('Infinity divided by Infinity', () => {
                expect(calculator.divide(Infinity, Infinity)).to.be.NaN;
            });
        });
    });
});
