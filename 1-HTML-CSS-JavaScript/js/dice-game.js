function rollDice() {
    let goldCoins = 0;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert('You roll a ' + roll + '. \n\nYour gold coin total is: ' + goldCoins );
        if (roll === 1) {
            alert('Game over, no more rolls! \n\nYour gold coin total is: ' + goldCoins );
            break;
        }
        if (roll === 4 && goldCoins > 0){
            goldCoins -= 1;
            alert('Sorry, you loose one gold coin \n\nYour gold coin total is: ' + goldCoins );
            continue;
        }
        if (roll < 5) {
            continue;
        }

        goldCoins += roll;
        alert('Congratulations, you win ' + roll + ' gold coins! \n\nYour gold coin total is: ' + goldCoins );
    }
    alert('You have won a total of ' + goldCoins + ' gold coins');
}