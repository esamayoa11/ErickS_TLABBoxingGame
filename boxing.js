
// Initial setup
let player1 = {
    name: "Player 1",
    health: 100,
}; 

let player2 = {
    name: "Player 2",
    health: 100,
};

let currentPlayer = player1;

// Function to generate random damage
function generateDamage() {
    return Math.floor(Math.random() * 10) + 1;
}

// Function to apply damage to the opponent
function applyDamage(opponent, damage) {
    let hitType = "";

    if (damage < 6) {
        hitType = "basic";
    } else if (damage >= 6 && damage < 10) {
        hitType = "critical";
    } else if (damage == 10) {
        hitType = "Knockout";
    }

// Display the hit result 
    console.log(`${currentPlayer.name} lands a ${hitType} hit on ${opponent.name}!`);

// Apply damage to opponent's health;
    opponent.health -= damage;

    if (opponent.health < 0) {
        opponent.health = 0;
    }

    console.log(`${opponent.name}'s health is now ${opponent.health}.`);
}

// Function to check if the game is over
function checkKnockout(opponent) {
    if (opponent.health <= 0) {
        console.log(`${opponent.name} has been KNOCKED OUT! 🥊`);
        console.log(`${currentPlayer.name} is the WINNER! 🏆`);
        return true; // Game over
    }
    return false;
}

// Function to switch turns
function switchTurns() {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    console.log(`It's now ${currentPlayer.name}'s turn.`);
}

// Main gameplay function
function playTurn() {
    const opponent = getOpponent();
    const damage = generateDamage();
    applyDamage(opponent, damage);

    if (checkKnockout(opponent)) {
        return false; // Stop the game if there's a knockout 
    }
    
    switchTurns();
    return true; // Continue the game
}

// Game loop 
function startGame() {
    console.log("Starting the Boxing Game!");
    console.log(`${player1.name} vs ${player2.name}`);
    while (player1.health > 0 && player2.health > 0) {
        if (!playTurn()) break; // Stop the game if there's a knockout
    }
    console.log("Game Over. Thanks for playing!");
}

// Start the game
startGame();