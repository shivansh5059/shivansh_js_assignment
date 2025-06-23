
const random = Math.floor(Math.random() * 10) + 1;


const userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

if (userGuess === random) {

    alert("Good Work");

} else {
    alert("Not matched");
}
