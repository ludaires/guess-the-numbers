

const CODE = [1,2,4,5]; // Number the player has to guess.
// const numbers = require('./getRandomNumber');

// console.log(numbers);
class Game {

    constructor(secret){
        this.secret = []; // Numbers the players choose
        this.attempts = 0; // Number of attempts to guess the numbers.
        this.guessesRemaining = 10; // Number of remainging guesses the player has
        this.guesses = []; // Number the player guessed 
        this.guessesLocation = []; // Number the player guessed with correct location 
        this.history = { // Players history: numbers played and how many attempts. 
            numbers: [],
            attempts: this.countAttempts
        };
        this.win = false;
        this.gameOver = false;
    }

    resetGame() {
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
        this.gameOver = false;
    }

    /**
     * Checks if the group of numbers is equal secret.
     * @param  {Array}  guess         An array containing the player's guess.
     * @return {string}               
     */
    guessSecret(guess) {
        //Check if Player can play.
        this.countAttempts++;
        this.guessesRemaining--;
        if ( this.countAttempts > 10) {
            this.gameOver = true;
            return 'You loose';
        }
  
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

        let message = this.messageForGuessedLocation();
        return message;
    }
    // NOT WORKING Most difficult part is name a function 
    // messageGuessedAnyNumber(){
    //     let check = this.numbersToBeGuessed;
    //     for (let i = 0; i < CODE.length; i++){
    //         for (let j =  0; j < CODE.length; j++ ){
    //             if (CODE[i] === check[j]){
    //                 this.numbersGuessed.push(check[j]);
    //             }
    //        }
    //     }
    //     return `You guessed ${ this.numbersGuessed.length} of numbers`;
    // }
    // Display messages to the player if he guessed any number.
    messageForGuessedLocation() {
        let accerts = this.numbersGuessedLocation.length
        switch (accerts) {
            case 4:
                this.win = true;
                return 'Congrats! You guessed all number!!';
            case (accerts < 4):
                return `You have guessed ${accerts} numbers in the correct location!! You have more ${this.guessesRemaining} to try`;
            default:
                let message = `Sorry, you did not guess any number location! You have more ${this.guessesRemaining} to try.`
                return message;
       }
    }
}

module.exports = Player;



// const CODE = [1,2,4,5]

let player = new Player();
console.log(player.guessNumber([0,3,6,7]));
console.log(player.guessNumber([0,3,6,7]));
console.log(player.guessNumber([0,3,6,7]));
console.log(player.guessNumber([0,3,6,7]));
console.log(player.guessNumber([0,3,6,7]));
console.log(player.guessNumber([0,3,6,7]));
console.log(player.guessNumber([0,3,6,7]));
console.log(player.guessNumber([0,3,6,7]));
console.log(player.guessNumber([0,3,6,7]));
console.log(player.guessNumber([0,3,6,7]));

console.log(player)
// console.log(player.messageForGuessedLocation());

// player.guessNumber([1,4,9,6]);
// console.log('second', player)
// console.log(player.messageForGuessedLocation());

// player.guessNumber([3,4,5,6]);
// console.log('third', player)
// player.guessNumber([3,4,5,6]);
// console.log('fourth', player)
// player.guessNumber([3,4,5,6]);
// console.log('fifith', player)
// player.guessNumber([3,4,5,6]);
// console.log('six', player)
// player.guessNumber([3,4,5,6]);
// console.log('seven', player)
// player.guessNumber([3,4,5,6]);
// console.log('eight', player)
// player.guessNumber([3,4,5,6]);
// console.log('nine', player)
// player.guessNumber([3,4,5,6]);
// console.log('ten', player)
// player.guessNumber([3,4,5,6]);




