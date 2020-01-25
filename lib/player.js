const CODE = [1,2,4,5]; 

class Player {

    constructor(){
        this.numbersToBeGuessed = [], // Numbers players 
        this.countAttempts = 0, // Number of attempts to guess the numbers.
        this.guessesRemaining = 10; // Number of remainging guesses the player has
        this.numbersGuessed = []; // Number the player guessed 
        this.numbersGuessedLocation = []; // Number the player guessed with correct location 
        this.guessedHistory = { // Players history: numbers played and how many attempts. 
            numbers: [],
            attempts: this.countAttempts
        },
        this.win = false
    }
    // guessing Number
    guessNumber(numbers) {
        this.numbersToBeGuessed = numbers;
        this.countAttempts++;
        this.guessedHistory.attempts = this.countAttempts;
        // Keep track of guesses
        this.guessedHistory.numbers.push(numbers);
        // array to collect number that was guessed correctly
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] === CODE[i]) {
                this.numbersGuessedLocation.push(numbers[i]);
            }
        }  

    }
    // Most difficult part is name a function 
    lookUpGuess(){
        const cache = {};
        // for (let i = 0; i < CODE.length; i++){
        //     if (cache)
        // }
    }
  
    // Display messages to the player if he guessed any number.
    displayMessageLocation() {
        let accerts = this.numbersGuessedLocation.length
       switch (accerts) {
            case 4:
                this.win = true;
               return 'Congrats! You guessed all number!!';
            case (numbersGuessed < 4):
               return `You have guessed ${numbersGuessed} numbers location!!`
            default:
               return 'Sorry, you did not guess any number location!'
       }
    }
}

let lud = new Player;

lud.guessNumber([3,2,1,4]);

console.log(lud)
