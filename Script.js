const choices = document.querySelectorAll('.choice');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');

const choicesArray = ['Piedra', 'Papel', 'Tijera'];

choices.forEach(choice => choice.addEventListener('click', (e) => {
    const userChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);
    
    userChoiceDisplay.textContent = `Tu elección: ${capitalize(userChoice)}`;
    computerChoiceDisplay.textContent = `Elección de la computadora: ${computerChoice}`;
    resultDisplay.textContent = `Resultado: ${result}`;
}));

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choicesArray.length);
    return choicesArray[randomIndex];
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice.toLowerCase()) {
        return 'Empate';
    }
    if (
        (userChoice === 'rock' && computerChoice === 'Tijera') ||
        (userChoice === 'paper' && computerChoice === 'Piedra') ||
        (userChoice === 'scissors' && computerChoice === 'Papel')
    ) {
        return 'Ganaste';
    }
    return 'Perdiste';
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
