const choices = ["rock", "paper", "scissors"];
let winners = [];

function resetGame() {
    winners = [];
    document.querySelector('.player').textContent = 'Score: 0';
    document.querySelector('.computer').textContent = 'Score: 0';
    document.querySelector('.ties').textContent = 'Ties: 0';
    document.querySelector('.winner').textContent = '';
    document.querySelector(',playerChoice').textContent = '';
    document.querySelector('.computerChoice').textContent = '';
    document.querySelector('.reset').style.display = "none";
}

function startGame() {
    let imgs = document.querySelectorAll("img");
    imgs.forEach((img) => img.addEventListener(('click'), () => {
        if (img.id) {
            playRound(img.id);
        }
    })
    );
}

function playRound(playerChoice) {
    let wins = checkWins();
    if (wins >= 5) {
        return;
    };
    const computerChoice = computerSelect();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    tallyWins();
    displayRound(playerChoice, computerChoice, winner);
    wins = checkWins();
    if (wins == 5) {
        displayEnd();
    }
}

function displayEnd() {
    let playerWinsEnd = winners.filter((item) => item == "Player").length;

    if (playerWinsEnd == 5) {
        document.querySelector('winner').textContent = "You won 5 times, congrats!"
    } else {
        document.querySelector(".winner").textContent = "Sorry, the computer won 5 times";
    }
    document.querySelector('.reset').style.display = 'flex'
}

function displayRound(playerChoice, computerChoice, winner) {
    document.querySelector(".playerChoice").textContent = `You chose: ${playerChoice}`;
    document.querySelector(".computerChoice").textContent = `The computer chose: ${computerChoice}`;
    document.querySelector(".winner").textContent = `Round Winner: ${winner}`;
}

function displayRoundWinner(winner) {
    if (winner == "Player") {
        document.querySelector(".winner").textContent = "You won the round!";
    } else if (winner == "Computer") {
        document.querySelector(".winner").textContent = "The computer won the round.";
    } else {
        document.querySelector(".winner").textContent = "The round was a tie";
    }
}

function tallyWins() {
    const playerWins = winners.filter((item) => item == "Player").length;
    const computerWins = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "Tie").length;
    document.querySelector(".playerScore").textContent = `Score: ${playerWins}`;
    document.querySelector(".computerScore").textContent = `Score: ${computerWins}`;
    document.querySelector(".ties").textContent = `Score: ${ties}`;
}

function computerSelect() {
    const choices = [Math.floor(Math.random() * choices.length)];

    document.querySelector(`.${choice}`).classList.add("active");

    setTimeout(() => {
        document.querySelector(`.${choice}`).classList.remove("active");
    }, 700); f

    return choice;
}

function checkWins() {
    const playerWins = winners.filter((item) => item == "Player").length;
    const computerWins = winners.filter((item) => item == "Computer").length;
    return Math.max(playerWins, computerWins);
}


function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return "Tie";
    } else if (
        (choiceP === "rock" && choiceC === "scissors") ||
        (choiceP === "paper" && choiceC === "rock") ||
        (choiceP === "scissors" && choiceC === "paper")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function setWins() {
    const playerWins = winners.filter((item) => item == "Player").length;
    const computerWins = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "Tie").length;
}

startGame();



