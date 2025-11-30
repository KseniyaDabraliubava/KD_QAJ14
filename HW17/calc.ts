export class Calculator {
    add(...args: Array<number>) {
        return args.reduce((acc, num) => acc + num, 0);
    }

    substract(value1: number, value2: number) {
        return value1 - value2;
    }

    multiply(value1: number, value2: number) {
        return value1 * value2;
    }

    divide(value1: number, value2: number) {
        if (value2 === 0) {
            throw new Error('Can not devide by zero');
        }
        return value1 / value2;
    }
}

const culc = new Calculator();
console.log(
    'Sum = ' +
        culc.add(2, 3, 2, 2) +
        '\n' +
        'Dif = ' +
        culc.substract(4, 6) +
        '\n' +
        'Mult = ' +
        culc.multiply(8, 2) +
        '\n' +
        'Quot = ' +
        culc.divide(8, 2)
) + '\n';
