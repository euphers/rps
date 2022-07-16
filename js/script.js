const buttons = document.querySelectorAll('button');

let cmpMove;
let usrMove;
let moves, addCmpMoveH3, addUsrMoveH3, gameResults;

let games = 0;
let cscore = 0;
let uscore = 0;
let wmessage;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        games++;

        cmpMove = computerMove();
        usrMove = button.innerHTML.toLowerCase();

        const results = document.querySelector('#results');

        if (document.querySelector('.moves')) {
            addCmpMoveH3.innerHTML = "Computer move: " + cmpMove;
            addUsrMoveH3.innerHTML = "User move: " + usrMove;
            gameResults.innerHTML = playRound(usrMove, cmpMove);
        } else {
            moves = document.createElement('div');
            moves.classList.add('moves');

            addCmpMoveH3 = document.createElement('h3');
            addCmpMoveH3.classList.add('cmove');
            addCmpMoveH3.style.margin = 0;
            addCmpMoveH3.innerText = "Computer move: " + cmpMove;

            addUsrMoveH3 = document.createElement('h3');
            addUsrMoveH3.classList.add('umove');
            addUsrMoveH3.style.margin = 0;
            addUsrMoveH3.innerHTML = "User move: " + usrMove;

            gameResults = document.createElement('h3');
            gameResults.classList.add('gresults');
            gameResults.style.margin = 0;
            gameResults.innerHTML = playRound(usrMove, cmpMove);

            moves.appendChild(addCmpMoveH3);
            moves.appendChild(addUsrMoveH3);
            moves.appendChild(gameResults);

            results.appendChild(moves);
        }

        if (cscore > uscore) {
            wmessage = "Computer: " + cscore + " - User: " + uscore;
        } else {
            wmessage = "User: " + uscore + " - Computer: " + cscore;
        }

        if (document.querySelector('.winner')) {
            winnerMsg.innerHTML = wmessage;
        } else {
            winner = document.createElement('div');
            winner.classList.add('winner');

            winnerMsg = document.createElement('h3');
            winnerMsg.classList.add('winner-msg');
            winnerMsg.innerHTML = wmessage;

            winner.appendChild(winnerMsg);
            moves.appendChild(winner);
        }

        if (games > 4) {
            if (cscore > uscore) {
                winnerMsg.innerHTML = "Computer wins! " + wmessage;
            } else {
                winnerMsg.innerHTML = "User wins! " + wmessage;
            }

            games = 0;
            cscore = 0;
            uscore = 0;
        }
    });
});

function computerMove() {
    let move = [
        'Rock',
        'Paper',
        'Scissor'
    ];

    let randomPlay = Math.floor(Math.random() * move.length);

    return move[randomPlay].toLowerCase();
}

function playRound(uMove, cMove) {
    let msgWin = "You Win! ";
    let msgLose = "You Lose! ";
    let msgTie = "It's a tie, try again!";
    let msgInvalid = "You entered an invalid entry.";

    if (cMove === 'rock') {
        if (uMove === 'scissor') {
            cscore++;
            return (msgLose + "Rock crushes Scissor.");
        } else if (uMove === 'paper') {
            uscore++;
            return (msgWin + "Paper wraps Rock.");
        } else if (uMove === "rock") {
            uscore++;
            return (msgTie);
        } else {
            cscore++;
            return (msgInvalid)
        }
    } else if (cMove === 'paper') {
        if (uMove === 'scissor') {
            uscore++;
            return (msgWin + "Scissor cuts Paper");
        } else if (uMove === 'rock') {
            cscore++;
            return (msgLose + "Paper wraps Rock");
        } else if (uMove === 'paper') {
            uscore++;
            return (msgTie);
        } else {
            cscore++;
            return (msgInvalid)
        }
    } else if (cMove === 'scissor') {
        if (uMove === 'scissor') {
            uscore++;
            return (msgTie);
        } else if (uMove === 'rock') {
            uscore++;
            return (msgWin + "Rock crushes Scissor");
        } else if (uMove === 'paper') {
            cscore++;
            return (msgLose + "Scissor cuts Paper");
        } else {
            cscore++;
            return (msgInvalid)
        }
    } else {
        return ("The computer doesn't want to play!")
    }
}