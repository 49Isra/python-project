function rollDice() {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById("result").innerHTML =
        `🎲 Dice 1: ${die1} <br> 🎲 Dice 2: ${die2}`;
}