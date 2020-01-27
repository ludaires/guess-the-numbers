(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// front end part will be here.
const Player = require('./lib/player');
const Random = require('./lib/getRandomNumber');
let gameOver = false;

let player = new Player();
let random = new Random();

let start = document.getElementById('game__start');
start.addEventListener('click', function(){
    return startGame();
})



// To start the game I need to initialize player and start.
},{"./lib/getRandomNumber":2,"./lib/player":3}],2:[function(require,module,exports){
let url = 'https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new'

// const RandomOrg = require('random-org');
// let random = new RandomOrg({ apiKey: '72e6e669-50b7-4aab-950d-107d8f4275dc'}).generateIntegers({
//     min: 0,
//     max: 7,
//     n: 4,
// }).then(result => {
//     let secretCode = result.random.data
//     return secretCode;
// });


// let secretCode = random.generateIntegers({
//     min: 0,
//     max: 7,
//     n: 4,
// }).then(result => result.random.data);

//console.log(random);
// const getRandomNumber = () => {
    //     return fetch(url)
    //         .then(res => res.text())
    //         .then(data => console.log(data))
    // };
    // tratar 
    // module.exports = getRandomNumber;

class GenerateNumber {
    constructor(url) {
        this.url = url,
        this.secretNumber = []; // TODO: I have to clean this data. 
    }
    getSecret(){
       fetch(url)
            .then(res => res.text())
            .then(data => this.secretNumber = data);
    }
}

module.exports = GenerateNumber;

},{}],3:[function(require,module,exports){


const CODE = [1,2,4,5]; // Number the player has to guess.
// const numbers = require('./getRandomNumber');

// console.log(numbers);
class Player {

    constructor(){
        this.numbersToBeGuessed = []; // Numbers the players choose
        this.countAttempts = 0; // Number of attempts to guess the numbers.
        this.guessesRemaining = 10; // Number of remainging guesses the player has
        this.numbersGuessed = []; // Number the player guessed 
        this.numbersGuessedLocation = []; // Number the player guessed with correct location 
        this.guessedHistory = { // Players history: numbers played and how many attempts. 
            numbers: [],
            attempts: this.countAttempts
        };
        this.win = false;
    }
    // guessing Number
    guessNumber(numbers) {
        //Check if Player can play.
        this.numbersToBeGuessed = numbers;
        this.countAttempts++;
        this.guessesRemaining = this.guessesRemaining - this.countAttempts;
        this.guessedHistory.attempts = this.countAttempts;
        // Keep track of guesses
        this.guessedHistory.numbers.push(numbers);
        // array to collect number that was guessed correctly
        for (let i = 0; i < CODE.length; i++) {
            const cache = {};
            cache[CODE[i]] = CODE[i]; // caching the CODE the player has to guess. 
            // pushing the number in the correct location.
            if (numbers[i] === CODE[i]) {
                this.numbersGuessedLocation.push(numbers[i]);
            }
        }  
        
    }
    //Most difficult part is name a function 
    messageGuessedAnyNumber(){
      for (let i = 0; i < CODE.length; i++){
          for (let j =  i + 1; j < CODE.length; j++ ){
              if (CODE[i] === this.numbersToBeGuessed[j]){
                  
                  this.numbersGuessed.push(CODE[i]);
                  console.log(this.numbersGuessed);
                }
           }
        }
        return `You guessed ${this.numbersGuessed.length} of numbers`;
    }
    // Display messages to the player if he guessed any number.
    messageForGuessedLocation() {
        let accerts = this.numbersGuessedLocation.length
        switch (accerts) {
            case 4:
                this.win = true;
                return 'Congrats! You guessed all number!!';
            case (accerts < 4):
                return `You have guessed ${accerts} numbers location!!`
            default:
                return 'Sorry, you did not guess any number location!'
       }
    }
}

module.exports = Player;

// let player = new Player();
// player.guessNumber([3,4,5,6]);
// console.log(player.messageGuessedAnyNumber());


},{}]},{},[1]);
