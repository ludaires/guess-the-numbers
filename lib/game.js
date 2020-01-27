
const MAX_ATTEMPS = 10;

class Game {
   
    constructor(secret){
        this.secret = secret;
        //  this.secret = secret.join(''); // Numbers the players choose
        // let m = new Map();
        // this.secretNumbers = secret.forEach((value, index) => m.set(value, index)); // create a hashtable     
        this.attempts = 0; // Number of attempts to guess the numbers.        
        this.guessesLocation = []; // Number the player guessed with correct location 
        this.history = [];
        this.winner = false;
        this.gameOver = false;
    }
    /**
     * Checks if the group of numbers is equal secret.
     * @param  {Array}  numbers  An array containing the player's guess.
     * @return {string} results A message to player.         
     */
    guess(numbers) {      
        if (this.attempts < MAX_ATTEMPS ) {
            if (numbers.join('') === this.secret.join('')) {
                this.win = true;
                return 'Congrats! You win!!!!'    
            } else {
            //    let score = numbers.flatMap((n) => ( this.secretNumbers.has(n) ? 1: 0 )).reduce((total, value) => total+value);
                this.history.push(numbers);
                this.attempts++;
                let score = numbers.diff(this.secret);
                console.log('score:', score)
                for (let i = 0; i < this.secret.length; i ++) {
                    if (numbers[i] === this.secret[i]) {
                        this.guessesLocation.push(this.secret[i]);
                    }
                }
                let message = this.result(score)
                return message;
            }
        } else {
            this.gameOver = true
            return 'Game Over.'
        }
       
    }

    result(score) {
        let value = this.guessesLocation.length;
        
        switch (value) {
            case 1: 
                return `Guessed number: ${score.length}. Remaining attempts: ${(MAX_ATTEMPS - this.attempts)} more time. History: ${this.history}`;
            case 2: 
                return `Guessed positions: ${value}. Guessed number: ${score.length}. Remaining attempts: ${(MAX_ATTEMPS - this.attempts)} more time.History: ${this.history}`;
            case 3: 
                return `Guessed positions: ${value}. Guessed number: ${score.length}. Remaining attempts: ${(MAX_ATTEMPS - this.attempts)} more time. History: ${this.history}`;
            default:
                return `The player’s guess was incorrect. Remaining attempts: ${(MAX_ATTEMPS - this.attempts)} more time. History: ${this.history}`;
                break;
        }
    }
}

Array.prototype.diff = function(arr2) {
    var ret = [];
    this.sort();
    arr2.sort();
    for(var i = 0; i < this.length; i += 1) {
        if(arr2.indexOf(this[i]) > -1){
            ret.push(this[i]);
        }
    }
    return ret;
};

module.exports = Game;





