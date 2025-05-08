/*
Created By : Evan Welborn
Date Created : 04/20/2025
Description : This file is used to create the draft 2022 page for SquadGrid.
It is an updated version of the draft_players.js file.
It uses a new method to check the players and teams. It also has a suggestion box
from the filteredPlayers.json file.
*/

//Make array of player, team, and pick
const draft2022 = [
    {pick: 1, team: "Jaguars", player: "Travon Walker", playerLastName: "Walker"},
    {pick: 2, team: "Lions", player: "Aidan Hutchinson", playerLastName: "Hutchinson"},
    {pick: 3, team: "Texans", player: "Derek Stingley Jr.", playerLastName: "Stingley"},
    {pick: 4, team: "Jets", player: "Sauce Gardner", playerLastName: "Gardner"},
    {pick: 5, team: "Giants", player: "Kayvon Thibodeaux", playerLastName: "Thibodeaux"},
    {pick: 6, team: "Panthers", player: "Ikem Ekwonu", playerLastName: "Ekwonu"},
    {pick: 7, team: "Giants", player: "Evan Neal", playerLastName: "Neal"},
    {pick: 8, team: "Falcons", player: "Drake London", playerLastName: "London"},
    {pick: 9, team: "Seahawks", player: "Charles Cross", playerLastName: "Cross"},
    {pick: 10, team: "Jets", player: "Garrett Wilson", playerLastName: "Wilson"},
    {pick: 11, team: "Saints", player: "Chris Olave", playerLastName: "Olave"},
    {pick: 12, team: "Lions", player: "Jameson Williams", playerLastName: "Williams"},
    {pick: 13, team: "Eagles", player: "Jordan Davis", playerLastName: "Davis"},
    {pick: 14, team: "Ravens", player: "Kyle Hamilton", playerLastName: "Hamilton"},
    {pick: 15, team: "Texans", player: "Kenyon Green", playerLastName: "Green"},
    {pick: 16, team: "Commanders", player: "Jahan Dotson", playerLastName: "Dotson"},
    {pick: 17, team: "Chargers", player: "Zion Johnson", playerLastName: "Johnson"},
    {pick: 18, team: "Titans", player: "Treylon Burks", playerLastName: "Burks"},
    {pick: 19, team: "Saints", player: "Trevor Penning", playerLastName: "Penning"},
    {pick: 20, team: "Steelers", player: "Kenny Pickett", playerLastName: "Pickett"},
    {pick: 21, team: "Chiefs", player: "Trent McDuffie", playerLastName: "McDuffie"},
    {pick: 22, team: "Packers", player: "Quay Walker", playerLastName: "Walker"},
    {pick: 23, team: "Bills", player: "Kaiir Elam", playerLastName: "Elam"},
    {pick: 24, team: "Cowboys", player: "Tyler Smith", playerLastName: "Smith"},
    {pick: 25, team: "Ravens", player: "Tyler Linderbaum", playerLastName: "Linderbaum"},
    {pick: 26, team: "Jets", player: "Jermaine Johnson II", playerLastName: "Johnson"},
    {pick: 27, team:"Jaguars", player: "Devin Lloyd", playerLastName: "Lloyd"},
    {pick: 28, team: "Packers", player: "Devonte Wyatt", playerLastName: "Wyatt"},
    {pick: 29, team: "Patriots", player: "Cole Strange", playerLastName: "Strange"},
    {pick: 30, team: "Chiefs", player: "George Karlaftis", playerLastName: "Karlaftis"},
    {pick: 31, team: "Bengals", player: "Daxton Hill", playerLastName: "Hill"},
    {pick: 32, team: "Vikings", player: "Lewis Cine", playerLastName: "Cine"},    
];

//Function To Match Button To Certain Pick
window.onload = function () {
    for (let i = 0; i < draft2022.length; i++) {
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
    const correctPlayer = draft2022[pickNumber - 1].player.toLowerCase();
    const correctPlayerLastName = draft2022[pickNumber - 1].playerLastName.toLowerCase();

    if(userInput === correctPlayer || userInput === correctPlayerLastName) {
        input.style.backgroundColor = "green";
        input.readOnly = true;
        input.value = draft2022[pickNumber - 1].player;
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
    fetch('filteredPlayers.json')
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

        let isClickingSuggestion = false;

        suggestionBox.addEventListener('mousedown', () => {
            isClickingSuggestion = true;
        });
        
        suggestionBox.addEventListener('mouseup', () => {
            isClickingSuggestion = false;
        });
        
        input.addEventListener('blur', () => {
            setTimeout(() => {
                if (!isClickingSuggestion) {
                    suggestionBox.style.display = 'none';
                }
            }, 100);
        });
    });
});



