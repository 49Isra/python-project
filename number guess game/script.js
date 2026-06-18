let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    let guess = document.getElementById("guess").value;
    let message = document.getElementById("message");

    if (guess === "") {
        message.textContent = "Please enter a number!";
        return;
    }

    guess = Number(guess);

    if (guess > randomNumber) {
        message.textContent = "Too High!";
    }
    else if (guess < randomNumber) {
        message.textContent = "Too Low!";
    }
    else {
        message.textContent = "🎉 Congratulations! You got it!";
    }
}