import { expect } from 'chai';
import { RockPaperScissors } from '../../rock/tests_rock/rps';

// Реализуем класс с 2 методами:
//  - сгенерировать случайным образом "rock" | "paper" | "scissors"
//  - получить на вход два значения (первое - от игрока, второе - от бота),
// а на выходе  сообщить выйграл игрок или проиграл

describe('RockPaperScissors Game', () => {
    let rps: RockPaperScissors;
    beforeEach(() => {
        rps = new RockPaperScissors();
    });

    describe('generateMove()', () => {
        it('should generate a valid move', () => {
            const validMoves = ['rock', 'paper', 'scissors'];
            const move = rps.generateMove();
            expect(validMoves).to.include(move, 'Generated move is not valid');
        });
    });

    describe('determineWinner() rock', () => {
        it("should return 'player' if player wins", () => {
            const result = rps.determineWinner('rock', 'scissors');
            expect(result).to.equal('player');
        });

        it("should return 'bot' if bot wins", () => {
            const result = rps.determineWinner('rock', 'paper');
            expect(result).to.equal('bot');
        });

        it("should return 'draw' if it's a draw", () => {
            const result = rps.determineWinner('rock', 'rock');
            expect(result).to.equal('draw');
        });
    });
    describe('determineWinner() paper', () => {
        it("should return 'player' if player wins", () => {
            const result = rps.determineWinner('paper', 'rock');
            expect(result).to.equal('player');
        });

        it("should return 'bot' if bot wins", () => {
            const result = rps.determineWinner('paper', 'scissors');
            expect(result).to.equal('bot');
        });

        it("should return 'draw' if it's a draw", () => {
            const result = rps.determineWinner('paper', 'paper');
            expect(result).to.equal('draw');
        });
    });
    describe('determineWinner() scissors', () => {
        it("should return 'player' if player wins", () => {
            const result = rps.determineWinner('scissors', 'paper');
            expect(result).to.equal('player');
        });

        it("should return 'bot' if bot wins", () => {
            const result = rps.determineWinner('scissors', 'rock');
            expect(result).to.equal('bot');
        });

        it("should return 'draw' if it's a draw", () => {
            const result = rps.determineWinner('scissors', 'scissors');
            expect(result).to.equal('draw');
        });
    });
});
