class Game {
    constructor() {
        this.reset();
    }

    reset() {
        this.target = Math.floor(Math.random() * 100) + 1;
        this.attempts = 0;
    }

    checkGuess(guess) {
        this.attempts++;
        if (guess < this.target) {
            return "Higher!";
        } else if (guess > this.target) {
            return "Lower!";
        } else {
            const message = `Correct! It took you ${this.attempts} attempts.`;
            this.reset();
            return message;
        }
    }
}

const game = new Game();
console.log(game.checkGuess(50)); 
console.log(game.checkGuess(75));  
console.log(game.checkGuess(60));  
console.log(game.checkGuess(85));  
