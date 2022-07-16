const buttons = document.querySelectorAll('button');

let cmpMove;
let usrMove;
let moves, addCmpMoveH3, addUsrMoveH3, gameResults;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
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
            return (msgLose + "Rock crushes Scissor.");
        } else if (uMove === 'paper') {
            return (msgWin + "Paper wraps Rock.");
        } else if (uMove === "rock") {
            return (msgTie);
        } else {
            return (msgInvalid)
        }
    } else if (cMove === 'paper') {
        if (uMove === 'scissor') {
            return (msgWin + "Scissor cuts Paper");
        } else if (uMove === 'rock') {
            return (msgLose + "Paper wraps Rock");
        } else if (uMove === 'paper') {
            return (msgTie);
        } else {
            return (msgInvalid)
        }
    } else if (cMove === 'scissor') {
        if (uMove === 'scissor') {
            return (msgTie);
        } else if (uMove === 'rock') {
            return (msgWin + "Rock crushes Scissor");
        } else if (uMove === 'paper') {
            return (msgLose + "Scissor cuts Paper");
        } else {
            return (msgInvalid)
        }
    } else {
        return ("The computer doesn't want to play!")
    }
}