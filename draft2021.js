/*
Created By : Evan Welborn
Date Created : 04/22/2025
Description : This file is used to create the draft 2022 page for SquadGrid.
It is an updated version of the draft_players.js file.
It uses a new method to check the players and teams. It also has a suggestion box
from the filteredPlayers.json file. This is pretty much copy and pasted besides player list
*/

//Make array of player, team, and pick
const draft2021 = [
    {pick: 1, team: "Jaguars", player: "Trevor Lawrence", playerLastName: "Lawrence"},
    {pick: 2, team: "Jets", player: "Zach Wilson", playerLastName: "Wilson"},
    {pick: 3, team: "49ers", player: "Trey Lance", playerLastName: "Lance"},
    {pick: 4, team: "Falcons", player: "Kyle Pitts", playerLastName: "Pitts"},
    {pick: 5, team: "Bengals", player: "Ja'marr Chase", playerLastName: "Chase"},
    {pick: 6, team: "Dolphins", player: "Jaylen Waddle", playerLastName: "Waddle"},
    {pick: 7, team: "Lions", player: "Penei Sewell", playerLastName: "Sewell"},
    {pick: 8, team: "Panthers", player: "Jaycee Horn", playerLastName: "Horn"},
    {pick: 9, team: "Broncos", player: "Pat Surtain II", playerLastName: "Surtain"},
    {pick: 10, team: "Eagles", player: "Devonta Smith", playerLastName: "Smith"},
    {pick: 11, team: "Bears", player: "Justin Fields", playerLastName: "Fields"},
    {pick: 12, team: "Cowgirls", player: "Micah Parsons", playerLastName: "Parsons"},
    {pick: 13, team: "Chargers", player: "Rashawn Slater", playerLastName: "Slater"},
    {pick: 14, team: "Jets", player: "Alijah Vera-Tucker", playerLastName: "Vera-Tucker"},
    {pick: 15, team: "Patriots", player: "Mac Jones", playerLastName: "Jones"},
    {pick: 16, team: "Cardinals", player: "Zaven Collins", playerLastName: "Collins"},
    {pick: 17, team: "Raiders", player: "Alex Leatherwood", playerLastName: "Leatherwood"},
    {pick: 18, team: "Dolphins", player: "Jaelan Phillips", playerLastName: "Phillips"},
    {pick: 19, team: "Commanders", player: "Jamin Davis", playerLastName: "Davis"},
    {pick: 20, team: "Giants", player: "Kadarius Toney", playerLastName: "Toney"},
    {pick: 21, team: "Colts", player: "Kwity Paye", playerLastName: "Paye"},
    {pick: 22, team: "Titans", player: "Caleb Farley", playerLastName: "Farley"},
    {pick: 23, team: "Vikings", player: "Christian Darrisaw", playerLastName: "Darrisaw"},
    {pick: 24, team: "Steelers", player: "Najee Harris", playerLastName: "Harris"},
    {pick: 25, team: "Jaguars", player: "Travis Etienne", playerLastName: "Etienne"},
    {pick: 26, team: "Browns", player: "Greg Newsome II", playerLastName: "Newsome"},
    {pick: 27, team:"Ravens", player: "Rashod Bateman", playerLastName: "Bateman"},
    {pick: 28, team: "Aints", player: "Payton Turner", playerLastName: "Turner"},
    {pick: 29, team: "Packers", player: "Eric Stokes", playerLastName: "Stokes"},
    {pick: 30, team: "Bills", player: "Greg Rousseau", playerLastName: "Rousseau"},
    {pick: 31, team: "Ravens", player: "Odafe Oweh", playerLastName: "Oweh"},
    {pick: 32, team: "Bucs", player: "Joe Tryon-Shoyinka", playerLastName: "Tryon-Shoyinka"},    
];

//Function To Match Button To Certain Pick
window.onload = function () {
    for (let i = 0; i < draft2021.length; i++) {
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
    const correctPlayer = draft2021[pickNumber - 1].player.toLowerCase();
    const correctPlayerLastName = draft2021[pickNumber - 1].playerLastName.toLowerCase();

    if(userInput === correctPlayer || userInput === correctPlayerLastName) {
        input.style.backgroundColor = "green";
        input.readOnly = true;
        input.value = draft2021[pickNumber - 1].player;
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



