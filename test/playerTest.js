var expect = require('chai').expect;
var Player = require('../lib/player');

var player = new Player();

describe ('class Player', function(){
    expect(player.numbersToBeGuessed).to.be.an('array');
    expect(player.countAttempts).to.equal(0);
    // expect(player.numbersToBeGuessed).to.be.an('array');
    // expect(player.numbersToBeGuessed).to.be.an('array');
    // expect(player.numbersToBeGuessed).to.be.an('array');
})