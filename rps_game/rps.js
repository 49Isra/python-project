const emojis = {
    r: "👊",
    p: "✋",
    s: "✌️"
};

const choices = ["r", "p", "s"];

function playGame(userChoice) {

    const computerChoice =
        choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("player-choice").textContent =
        `You chose ${emojis[userChoice]}`;

    document.getElementById("computer-choice").textContent =
        `Computer chose ${emojis[computerChoice]}`;

    let result = "";

    if (userChoice === computerChoice) {
        result = "🤝 It's a Tie!";
    }
    else if (
        (userChoice === "r" && computerChoice === "s") ||
        (userChoice === "p" && computerChoice === "r") ||
        (userChoice === "s" && computerChoice === "p")
    ) {
        result = "🎉 You Win!";
    }
    else {
        result = "😢 You Lose!";
    }

    document.getElementById("result").textContent = result;
}