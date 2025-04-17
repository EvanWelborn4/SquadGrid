/*
Created By : Evan Welborn
Date Created : 04/17/2025
Description : This file is used to create the draft 2023 page for SquadGrid.
It is an updated version of the draft_players.js file.
It uses a new method to check the players and teams. It also has a suggestion box
from the filteredPlayers.json file.
*/

//Make array of player, team, and pick
const draft2023 = [
    {pick: 1, team: "Panthers", player: "Bryce Young", playerLastName: "Young"},
    {pick: 2, team: "Texans", player: "C.J. Stroud", playerLastName: "Stroud"},
    {pick: 3, team: "Texans", player: "Will Anderson Jr.", playerLastName: "Anderson"},
    {pick: 4, team: "Colts", player: "Anthony Richardson", playerLastName: "Richardson"},
    {pick: 5, team: "Seahawks", player: "Devon Witherspoon", playerLastName: "Witherspoon"},
    {pick: 6, team: "Cardinals", player: "Paris Johnson Jr.", playerLastName: "Johnson"},
    {pick: 7, team: "Raiders", player: "Tyree Wilson", playerLastName: "Wilson"},
    {pick: 8, team: "Falcons", player: "Bijan Robinson", playerLastName: "Robinson"},
    {pick: 9, team: "Eagles", player: "Jalen Carter", playerLastName: "Carter"},
    {pick: 10, team: "Bears", player: "Darnell Wright", playerLastName: "Wright"},
    {pick: 11, team: "Titans", player: "Peter Skoronski", playerLastName: "Skoronski"},
    {pick: 12, team: "Lions", player: "Gibbs", playerLastName: "Gibbs"},
    {pick: 13, team: "Packers", player: "Lucas Van Ness", playerLastName: "Van Ness"},
    {pick: 14, team: "Steekers", player: "Broderick Jones", playerLastName: "Jones"},
    {pick: 15, team: "Jets", player: "Will McDonald IV", playerLastName: "McDonald"},
    {pick: 16, team: "Commanders", player: "Emmanuel Forbes", playerLastName: "Forbes"},
    {pick: 17, team: "Patriots", player: "Christian Gonzalez", playerLastName: "Gonzalez"},
    {pick: 18, team: "Lions", player: "Jack Campbell", playerLastName: "Campbell"},
    {pick: 19, team: "Buccaneers", player: "Calijah Kancey", playerLastName: "Kancey"},
    {pick: 20, team: "Seahawks", player: "Jaxon Smith-Njigba", playerLastName: "Smith-Njigba", playerNickName: "JSN"},
    {pick: 21, team: "Chargers", player: "Quentin Johnston", playerLastName: "Johnston"},
    {pick: 22, team: "Ravens", player: "Zay Flowers", playerLastName: "Flowers"},
    {pick: 23, team: "Vikings", player: "Jordan Addison", playerLastName: "Addison"},
    {pick: 24, team: "Giants", player: "Deonte Banks", playerLastName: "Banks"},
    {pick: 25, team: "Bills", player: "Dalton Kincaid", playerLastName: "Kincaid"},
    {pick: 26, team: "Cowboys", player: "Mozzie Smith", playerLastName: "Smith"},
    {pick: 27, team: "Jaguars", player: "Anton Harrison", playerLastName: "Harrison"},
    {pick: 28, team: "Bengals", player: "Miles Murphy", playerLastName: "Murphy"},
    {pick: 29, team: "Saints", player: "Bryan Bresee", playerLastName: "Bresee"},
    {pick: 30, team: "Eagles", player: "Nolan Smith", playerLastName: "Smith"},
    {pick: 31, team: "Chiefs", player: "Felix Anudike-Uzomah", playerLastName: "Anudike-Uzomah"},
]

//Function To Match Button To Certain Pick
window.onload = function () {
    for (let i = 0; i < draft2023.length; i++) {
       const pickNumber = i + 1; 
       const button = document.getElementById(`check${pickNumber}`);
       if(button) {
        button.addEventListener("click", () => checkPick(pickNumber));
       }
    }
}

//Function To Check Draft Pick
//A lot better than old way in draft_players.js
function checkPick(pickNumber) {
    const input = document.getElementById(`player${pickNumber}`);
    
    //Check for correct answers or blank one
    if(!input || input.readOnly) {
        return;
    }

    const userInput = input.value.trim().toLowerCase();
    const correctPlayer = draft2023[pickNumber - 1].player.toLowerCase();
    const correctPlayerLastName = draft2023[pickNumber - 1].playerLastName.toLowerCase();

    if(userInput === correctPlayer || userInput === correctPlayerLastName) {
        input.style.backgroundColor = "green";
        input.readOnly = true;
        input.value = draft2023[pickNumber - 1].player;
        endGame();
    } else {
        input.style.backgroundColor = "red";
        input.value = '';
    }
}

//Pop Up Alert if User gets everything right
function endGame() {
    const correctCounterItem = document.getElementById('correctCount');
    let correctAnswerCounter = 0;
    const allInputs = document.querySelectorAll('input');
    allInputs.forEach(x => {
        if (x.style.backgroundColor === 'green') {
            correctAnswerCounter++;
         } 
    });

    correctCounterItem.innerHTML = correctAnswerCounter;

    if(correctAnswerCounter === 31) {
        setTimeout(() => {
            alert("Good Job!");
        }, 1000);
    }
}

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetGame);

//Clear All Input Fields
function resetGame() {
    const allInputs = document.querySelectorAll('input');
    allInputs.forEach(x => {
        x.style.backgroundColor = 'white';
        x.readOnly = false;
        x.value = '';
    });
    const correctCounterItem = document.getElementById('correctCount');
    correctCounterItem.innerHTML = 0;
    endGame();
}

//Fetch Data From API for Suggestion Box
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input[type="text"]');

    const suggestionBox = document.createElement('div');
    suggestionBox.classList.add('suggestion-box');
    document.body.appendChild(suggestionBox);

    let playerNames = [];


    // Fetch player data from the JSON file
    fetch('../json/filteredPlayers.json')
        .then(response => response.json())
        .then(data => {
             playerNames = data.map(player => player.name);
        })  
            
        .catch(error => {
            console.error('Error fetching player data:', error);
        });

        pickCount = 0;
        
        inputs.forEach(input => {
        pickCount++;    
        input.addEventListener('input', () => {
            const inputValue = input.value.toLowerCase();
            suggestionBox.innerHTML = ''; 

            if (inputValue.length === 0) {
                suggestionBox.style.display = 'none';
                return;
            }

            const matches = playerNames.filter(name =>
                name.toLowerCase().includes(inputValue)
            );

            if (matches.length === 0) {
                suggestionBox.style.display = 'none';
                return;
            }

            matches.forEach(name => {
                const suggestion = document.createElement('div');
                suggestion.textContent = name;
                suggestion.classList.add('suggestion');
                suggestion.addEventListener('click', () => {
                    input.value = name;
                    suggestionBox.style.display = 'none';

                    //Get the player that is selected
                    const inputId = input.id;
                    const pickNumber = parseInt(inputId.replace("player", ""));

                    checkPick(pickNumber);
                });
                suggestionBox.appendChild(suggestion);
            });

            // Position the suggestion box under the input
            const rect = input.getBoundingClientRect();
            suggestionBox.style.left = `${rect.left + window.scrollX}px`;
            suggestionBox.style.top = `${rect.bottom + window.scrollY}px`;
            suggestionBox.style.width = `${rect.width}px`;
            suggestionBox.style.display = 'block';
        });

        //Trigger the Suggestions
        input.addEventListener('focus', () => {
            if (input.value.length > 0) {
                input.dispatchEvent(new Event('input'));
            }
        });

        input.addEventListener('blur', () => {
            setTimeout(() => {
                suggestionBox.style.display = 'none';
            }, 100); // Delay to allow click event to register
        });

    });
});



