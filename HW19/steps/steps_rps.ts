import { Given, When, Then, Before } from '@cucumber/cucumber';
import { expect } from 'chai';
import { RockPaperScissors } from '../rps';

type Moves = 'rock' | 'paper' | 'scissors';
type Result = 'player' | 'bot' | 'draw';

let rps: RockPaperScissors;
let playerMove: Moves;
let botMove: Moves;
let gameResult: Result;

Before(function () {
    rps = new RockPaperScissors();
});

Given('Rock Paper Scissors game is created', function () {
    rps = new RockPaperScissors();
});

Given('Player chooses {string}', function (move: Moves) {
    playerMove = move;
});

When('Bot chooses {string}', function (move: Moves) {
    botMove = move;
    gameResult = rps.determineWinner(playerMove, botMove);
});

Then('Result should be {string}', function (expectedResult: Result) {
    expect(gameResult).to.equal(expectedResult, `Expected ${expectedResult} but got ${gameResult}`);
});

// Player wins

Then('Player should win', function () {
    expect(gameResult).to.equal('player', `Expected player to win, but got ${gameResult}`);
});

Then('Player wins with rock against scissors', function () {
    playerMove = 'rock';
    botMove = 'scissors';
    gameResult = rps.determineWinner(playerMove, botMove);
    expect(gameResult).to.equal('player');
});

Then('Player wins with paper against rock', function () {
    playerMove = 'paper';
    botMove = 'rock';
    gameResult = rps.determineWinner(playerMove, botMove);
    expect(gameResult).to.equal('player');
});

Then('Player wins with scissors against paper', function () {
    playerMove = 'scissors';
    botMove = 'paper';
    gameResult = rps.determineWinner(playerMove, botMove);
    expect(gameResult).to.equal('player');
});

// Bot wins

Then('Bot should win', function () {
    expect(gameResult).to.equal('bot', `Expected bot to win, but got ${gameResult}`);
});

Then('Bot wins with rock against scissors', function () {
    playerMove = 'scissors';
    botMove = 'rock';
    gameResult = rps.determineWinner(playerMove, botMove);
    expect(gameResult).to.equal('bot');
});

Then('Bot wins with paper against rock', function () {
    playerMove = 'rock';
    botMove = 'paper';
    gameResult = rps.determineWinner(playerMove, botMove);
    expect(gameResult).to.equal('bot');
});

Then('Bot wins with scissors against paper', function () {
    playerMove = 'paper';
    botMove = 'scissors';
    gameResult = rps.determineWinner(playerMove, botMove);
    expect(gameResult).to.equal('bot');
});

// Draws

Then('Game should be a draw', function () {
    expect(gameResult).to.equal('draw', `Expected draw, but got ${gameResult}`);
});

Then('Should be a draw with both choosing rock', function () {
    playerMove = 'rock';
    botMove = 'rock';
    gameResult = rps.determineWinner(playerMove, botMove);
    expect(gameResult).to.equal('draw');
});

Then('Should be a draw with both choosing paper', function () {
    playerMove = 'paper';
    botMove = 'paper';
    gameResult = rps.determineWinner(playerMove, botMove);
    expect(gameResult).to.equal('draw');
});

Then('Should be a draw with both choosing scissors', function () {
    playerMove = 'scissors';
    botMove = 'scissors';
    gameResult = rps.determineWinner(playerMove, botMove);
    expect(gameResult).to.equal('draw');
});
