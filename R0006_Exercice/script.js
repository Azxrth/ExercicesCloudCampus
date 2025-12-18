// === Exercice 1 - Télécommande de lampe ===
// TODO:
// 1. Cibler le bouton et l'ampoule
//    - Utiliser document.querySelector() pour sélectionner les éléments
//    - Stocker les références dans des variables
// 2. Ajouter un écouteur d'événement sur le bouton
//    - Utiliser addEventListener() avec l'événement 'click'
// 3. Au clic, basculer la classe 'on' sur l'ampoule
//    - Utiliser classList.toggle() pour ajouter/retirer la classe

// === Exercice 2 - Afficheur de mot mystère ===
// TODO:
// 1. Cibler l'input, le bouton et le paragraphe de résultat
// 2. Ajouter un écouteur d'événement sur le bouton
// 3. Au clic, récupérer la valeur de l'input et l'afficher dans le paragraphe

// === Exercice 3 - Simulateur d'humeur ===
// TODO:
// 1. Cibler les boutons et la zone d'affichage
// 2. Ajouter des écouteurs d'événements sur chaque bouton
// 3. Au clic, modifier le texte selon l'humeur sélectionnée

// === Exercice 4 - Contrôle de volume ===

// === Exercice 5 - Nom d'utilisateur en direct ===


//Exercice 1 - Télécommande de lampe
const lampButton = document.querySelector('#lamp-button');
const lampBulb = document.querySelector('#lamp-bulb');

lampButton.addEventListener('click', () => {
    lampBulb.classList.toggle('on');
});

//Exercice 2 - Afficheur de mot mystère
const mysteryInput = document.querySelector('#mystery-input');
const mysteryButton = document.querySelector('#mystery-button');
const mysteryResult = document.querySelector('#mystery-result');        

mysteryButton.addEventListener('click', () => {
    const mysteryWord = mysteryInput.value;
    mysteryResult.textContent = `Le mot mystère est : ${mysteryWord}`;
});

//Exercice 3 - Simulateur d'humeur
const happyButton = document.querySelector('#happy-button');
const sadButton = document.querySelector('#sad-button');
const moodDisplay = document.querySelector('#mood-display');

happyButton.addEventListener('click', () => {
    moodDisplay.textContent = "Vous êtes heureux ! 😊";
});

sadButton.addEventListener('click', () => {
    moodDisplay.textContent = "Vous êtes triste. 😢";
}); 

//Exercice 4 - Contrôle de volume
const volumeUpButton = document.querySelector('#volume-up-button');
const volumeDownButton = document.querySelector('#volume-down-button');
const volumeDisplay = document.querySelector('#volume-display');

let volumeLevel = 5; // Niveau de volume initial

const updateVolumeDisplay = () => {
    volumeDisplay.textContent = `Volume: ${volumeLevel}`;
};

volumeUpButton.addEventListener('click', () => {
    if (volumeLevel < 10) {
        volumeLevel++;
        updateVolumeDisplay();
    }
});

volumeDownButton.addEventListener('click', () => {
    if (volumeLevel > 0) {
        volumeLevel--;
        updateVolumeDisplay();
    }
});

//Initialiser l'affichage du volume
updateVolumeDisplay();

//Exercice 5 - Nom d'utilisateur en direct
const usernameInput = document.querySelector('#username-input');
const usernameDisplay = document.querySelector('#username-display');

usernameInput.addEventListener('input', () => {
    const username = usernameInput.value;
    usernameDisplay.textContent = `Bonjour, ${username}!`;
});

