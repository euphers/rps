const buttons = document.querySelectorAll('button');

let cmpMove;
let usrMove;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        cmpMove = computerMove();
        usrMove = button.innerHTML.toLowerCase();
        console.log("Computer move: " + cmpMove);
        console.log("Player move: " + usrMove);
        console.log(playRound(usrMove, cmpMove));
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