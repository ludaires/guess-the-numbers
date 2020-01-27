var expect = require('chai').expect;
var Game = require('../lib/game');

var player = new Game();

describe ('class Game', function(){
    expect(player.numbersToBeGuessed).to.be.an('array');
    expect(player.countAttempts).to.equal(0);
    // expect(player.numbersToBeGuessed).to.be.an('array');
    // expect(player.numbersToBeGuessed).to.be.an('array');
    // expect(player.numbersToBeGuessed).to.be.an('array');
})