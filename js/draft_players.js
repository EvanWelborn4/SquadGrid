/*
Created by: Evan Welborn
Date: 2/17/2025
Description: This file will handle the draft recap minigame.
*/

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

const firstPickInput = document.getElementById('firstPick');
firstPickInput.addEventListener('click', correctFirstPick);

function correctFirstPick() {
    const searchElement = document.getElementById('player1');
    const searchValue = searchElement.value;
    if (searchValue.toLowerCase() === 'Caleb Williams'.toLowerCase() || searchValue.toLowerCase() === 'Williams'.toLowerCase()) {
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'Caleb Williams';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
    }
}

const secondPickInput = document.getElementById('secondPick');
secondPickInput.addEventListener('click', correctSecondPick);

function correctSecondPick() {
    const searchElement = document.getElementById('player2');
    const searchValue = searchElement.value;
    if (searchValue.toLowerCase() === 'Jayden Daniels'.toLowerCase() || searchValue.toLowerCase() === 'Daniels'.toLowerCase()) {
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'Jayden Daniels';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
    }
}

const thirdPickInput = document.getElementById('thirdPick');
thirdPickInput.addEventListener('click', correctThirdPick);

function correctThirdPick() {
    const searchElement = document.getElementById('player3');
    const searchValue = searchElement.value;
    if(searchValue.toLowerCase() === 'Drake Maye'.toLowerCase() || searchValue.toLowerCase() === 'Maye'.toLowerCase()) {
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'Drake Maye';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
    }
}

const fourthPickInput = document.getElementById('fourthPick');
fourthPickInput.addEventListener('click', correctFourthPick);

function correctFourthPick() {
    const searchElement = document.getElementById('player4');
    const searchValue = searchElement.value;
    if(searchValue.toLowerCase() === 'Marvin Harrison Jr'.toLowerCase() || searchValue.toLowerCase() === 'Harrison jr'.toLowerCase() || searchValue.toLowerCase() === 'Marvin Harrison'.toLowerCase() || searchValue.toLowerCase() === 'Harrison'.toLowerCase()) {
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'Marvin Harrison Jr';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
    }
}

const fifthPickInput = document.getElementById('fifthPick');
fifthPickInput.addEventListener('click', correctFifthPick);

function correctFifthPick() {
    const searchElement = document.getElementById('player5');
    const searchValue = searchElement.value;
    if(searchValue.toLowerCase() === 'Joe Alt'.toLowerCase() || searchValue.toLowerCase() === 'Alt'.toLowerCase()) {
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'Joe Alt';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
    }
}

const sixthPickInput = document.getElementById('sixthPick');
sixthPickInput.addEventListener('click', correctSixthPick);

function correctSixthPick() {
    const searchElement = document.getElementById('player6');
    const searchValue = searchElement.value;
    if(searchValue.toLowerCase() === 'Malik Nabers'.toLowerCase() || searchValue.toLowerCase() === 'Nabers'.toLowerCase()) {
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'Malik Nabers';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
    }
}

const seventhPickInput = document.getElementById('seventhPick');
seventhPickInput.addEventListener('click', correctSeventhPick);

function correctSeventhPick() {
    const searchElement = document.getElementById('player7');
    const searchValue = searchElement.value;
    if(searchValue.toLowerCase() === 'JC Latham'.toLowerCase() || searchValue.toLowerCase() === 'J.C. Latham'.toLowerCase() || searchValue.toLowerCase() === 'Latham'.toLowerCase()) {
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'JC Latham';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
    }
}

const eightPickInput = document.getElementById('eightthPick');
eightPickInput.addEventListener('click', correctEightthPick)

function correctEightthPick() {
    const searchElement = document.getElementById('player8');
    const searchValue = searchElement.value;
       
    if(searchValue.toLowerCase() === 'Michael Penix Jr'.toLowerCase() || searchValue.toLowerCase() === 'penix jr'.toLowerCase() || searchValue.toLowerCase() === 'Penix'.toLowerCase()){
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'Michael Penix Jr';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
        }    
} 

const ninethPickInput = document.getElementById('ninethPick');
ninethPickInput.addEventListener('click', correctNinethPick);

function correctNinethPick() {
    const searchElement = document.getElementById('player9');
    const searchValue = searchElement.value;
       
    if(searchValue.toLowerCase() === 'Rome Odunze'.toLowerCase() || searchValue.toLowerCase() === 'Odunze'.toLowerCase()){
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'Rome Odunze';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
        }    
} 

const tenthPickInput = document.getElementById('tenthPick');
tenthPickInput.addEventListener('click', correctTenthPick);

function correctTenthPick() {
    const searchElement = document.getElementById('player10');
    const searchValue = searchElement.value;

    if(searchValue.toLowerCase() === 'JJ Mccarthy'.toLowerCase() || searchValue.toLowerCase() === 'J.J. Mccarthy'.toLowerCase() || searchValue.toLowerCase() === "McCarthy".toLowerCase()) {
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'JJ Mccarthy';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
    }
}

const eleventhPickInput = document.getElementById('eleventhPick');
eleventhPickInput.addEventListener('click', correctEleventhPick);

function correctEleventhPick() {
    const searchElement = document.getElementById('player11');
    const searchValue = searchElement.value;

    if(searchValue.toLowerCase() === 'Olumuyiwa Fashanu'.toLowerCase() || searchValue.toLowerCase() === 'Fashanu'.toLowerCase()) {
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'Olumuyiwa Fashanu';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
    }
}

const twelthPickInput = document.getElementById('twelthPick');
twelthPickInput.addEventListener('click', correctTwelthPick);

function correctTwelthPick() {
    const searchElement = document.getElementById('player12');
    const searchValue = searchElement.value;

    if(searchValue.toLowerCase() === 'Bo Nix'.toLowerCase() || searchValue.toLowerCase() === 'Nix'.toLowerCase()) {
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'Bo Nix';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
    }
}

const thirteenthPickInput = document.getElementById('thirteenthPick');
thirteenthPickInput.addEventListener('click', correctThirteenthPick);

function correctThirteenthPick() {
    const searchElement = document.getElementById('player13');
    const searchValue = searchElement.value;

    if(searchValue.toLowerCase() === 'Brock Bowers'.toLowerCase() || searchValue.toLowerCase() === 'Bowers'.toLowerCase()) {
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'Brock Bowers';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
    }
}

const fourteenthPickInput = document.getElementById('fourteenthPick');
fourteenthPickInput.addEventListener('click', correctFourteenthPick);

function correctFourteenthPick() {
    const searchElement = document.getElementById('player14');
    const searchValue = searchElement.value;

    if(searchValue.toLowerCase() === 'Taliese Fuaga'.toLowerCase() || searchValue.toLowerCase() === 'Fuaga'.toLowerCase()) {
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'Taliese Fuaga';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
    }
}

const fifteenthPickInput = document.getElementById('fifteenthPick');
fifteenthPickInput.addEventListener('click', correctFifteenthPick);

function correctFifteenthPick() {
    const searchElement = document.getElementById('player15');
    const searchValue = searchElement.value;

    if(searchValue.toLowerCase() === 'Laiatu Latu'.toLowerCase() || searchValue.toLowerCase() === 'Latu'.toLowerCase()) {
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'Laiatu Latu';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
    }
}

const sixteenthPickInput = document.getElementById('sixteenthPick');
sixteenthPickInput.addEventListener('click', correctSixteenthPick);

function correctSixteenthPick() {
    const searchElement = document.getElementById('player16');
    const searchValue = searchElement.value;

    if(searchValue.toLowerCase() === 'Byron Murphy II'.toLowerCase() || searchValue.toLowerCase() === 'Murphy'.toLowerCase()  || searchValue.toLowerCase() === 'Byron Murphy'.toLowerCase() || searchValue.toLowerCase() === 'Murphy II'.toLowerCase()){
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'Byron Murphy II';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
    }
}

const seventeenthPickInput = document.getElementById('seventeenthPick');
seventeenthPickInput.addEventListener('click', correctSeventeenthPick);

function correctSeventeenthPick() {
    const searchElement = document.getElementById('player17');
    const searchValue = searchElement.value;

    if(searchValue.toLowerCase() === 'Dallas Turner'.toLowerCase() || searchValue.toLowerCase() === 'Turner'.toLowerCase()) {
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'Dallas Turner';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
    }
}

const eighteenthPickInput = document.getElementById('eightteenthPick');
eighteenthPickInput.addEventListener('click', correctEighteenthPick);

function correctEighteenthPick() {
    const searchElement = document.getElementById('player18');
    const searchValue = searchElement.value;

    if(searchValue.toLowerCase() === 'Amarius Mims'.toLowerCase() || searchValue.toLowerCase() === 'Mims'.toLowerCase()) {
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'Amarius Mims';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
    }
}

const nineteenthPickInput = document.getElementById('nineteenthPick');
nineteenthPickInput.addEventListener('click', correctNineteenthPick);

function correctNineteenthPick() {
    const searchElement = document.getElementById('player19');
    const searchValue = searchElement.value;

    if(searchValue.toLowerCase() === 'Jared Verse'.toLowerCase() || searchValue.toLowerCase() === 'Verse'.toLowerCase()) {
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'Jared Verse';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
    }
}


const twentiethPickInput = document.getElementById('twentythPick');
twentiethPickInput.addEventListener('click', correctTwentiethPick);

function correctTwentiethPick() {
    const searchElement = document.getElementById('player20');
    const searchValue = searchElement.value;

    if(searchValue.toLowerCase() === 'Troy Fautanu'.toLowerCase() || searchValue.toLowerCase() === 'Fautanu'.toLowerCase()) {
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'Troy Fautanu';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
    }
}

const twentyFirstPickInput = document.getElementById('twentyFirstPick');
twentyFirstPickInput.addEventListener('click', correctTwentyFirstPick);

function correctTwentyFirstPick() {
    const searchElement = document.getElementById('player21');
    const searchValue = searchElement.value;

    if(searchValue.toLowerCase() === 'Chop Robinson'.toLowerCase() || searchValue.toLowerCase() === 'Robinson'.toLowerCase()) {
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'Chop Robinson';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
    }
}

const twentySecondPickInput = document.getElementById('twentySecondPick');
twentySecondPickInput.addEventListener('click', correctTwentySecondPick);

function correctTwentySecondPick() {
    const searchElement = document.getElementById('player22');
    const searchValue = searchElement.value;

    if(searchValue.toLowerCase() === 'Quinyon Mitchell'.toLowerCase() || searchValue.toLowerCase() === 'Mitchell'.toLowerCase()) {
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'Quinyon Mitchell';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
    }
}

const twentyThirdPickInput = document.getElementById('twentyThirdPick');
twentyThirdPickInput.addEventListener('click', correctTwentyThirdPick);

function correctTwentyThirdPick() {
    const searchElement = document.getElementById('player23');
    const searchValue = searchElement.value;

    if(searchValue.toLowerCase() === 'Brian Thomas Jr'.toLowerCase() || searchValue.toLowerCase() === 'Thomas Jr'.toLowerCase() || searchValue.toLowerCase() === 'Brian Thomas'.toLowerCase() || searchValue.toLowerCase() === 'Thomas'.toLowerCase()) {
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'Brian Thomas Jr';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
    }
}

const twentyFourthPickInput = document.getElementById('twentyFourthPick');
twentyFourthPickInput.addEventListener('click', correctTwentyFourthPick);

function correctTwentyFourthPick() {
    const searchElement = document.getElementById('player24');
    const searchValue = searchElement.value;

    if(searchValue.toLowerCase() === 'Terrion Arnold'.toLowerCase() || searchValue.toLowerCase() === 'Arnold'.toLowerCase()) {
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'Terrion Arnold';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
    }
}

const twentyFifthPickInput = document.getElementById('twentyFifthPick');
twentyFifthPickInput.addEventListener('click', correctTwentyFifthPick);

function correctTwentyFifthPick() {
    const searchElement = document.getElementById('player25');
    const searchValue = searchElement.value;

    if(searchValue.toLowerCase() === 'Jordan Morgan'.toLowerCase() || searchValue.toLowerCase() === 'Morgan'.toLowerCase()) {
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'Jordan Morgan';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
    }
}

const twentySixthPickInput = document.getElementById('twentySixthPick');
twentySixthPickInput.addEventListener('click', correctTwentySixthPick);

function correctTwentySixthPick() {
    const searchElement = document.getElementById('player26');
    const searchValue = searchElement.value;

    if(searchValue.toLowerCase() === 'Graham Barton'.toLowerCase() || searchValue.toLowerCase() === 'Barton'.toLowerCase()) {
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'Graham Barton';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
    }
}

const twentySeventhPickInput = document.getElementById('twentySeventhPick');
twentySeventhPickInput.addEventListener('click', correctTwentySeventhPick);

function correctTwentySeventhPick() {
    const searchElement = document.getElementById('player27');
    const searchValue = searchElement.value;

    if(searchValue.toLowerCase() === 'Darius Robinson'.toLowerCase() || searchValue.toLowerCase() === 'Robinson'.toLowerCase()) {
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'Darius Robinson';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
    }
}

const twentyEighthPickInput = document.getElementById('twentyEighthPick');
twentyEighthPickInput.addEventListener('click', correctTwentyEighthPick);

function correctTwentyEighthPick() {
    const searchElement = document.getElementById('player28');
    const searchValue = searchElement.value;

    if(searchValue.toLowerCase() === 'Xavier Worthy'.toLowerCase() || searchValue.toLowerCase() === 'Worthy'.toLowerCase()) {
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'Xavier Worthy';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
    }
}

const twentyNinthPickInput = document.getElementById('twentyNinethPick');
twentyNinthPickInput.addEventListener('click', correctTwentyNinthPick);

function correctTwentyNinthPick() {
    const searchElement = document.getElementById('player29');
    const searchValue = searchElement.value;

    if(searchValue.toLowerCase() === 'Tyler Guyton'.toLowerCase() || searchValue.toLowerCase() === 'Guyton'.toLowerCase()) {
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'Tyler Guyton';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
    }
}


const thirtiethPickInput = document.getElementById('thirtiethPick');
thirtiethPickInput.addEventListener('click', correctThirtiethPick);

function correctThirtiethPick() {
    console.log('Clicked thirtiethPick button');
    const searchElement = document.getElementById('player30');
    const searchValue = searchElement.value;

    if(searchValue.toLowerCase() === 'Nate Wiggins'.toLowerCase() || searchValue.toLowerCase() === 'Wiggins'.toLowerCase()) {
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'Nate Wiggins';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
    }
}

const thirtyFirstPickInput = document.getElementById('thiryFirstPick');
thirtyFirstPickInput.addEventListener('click', correctThirtyFirstPick);

function correctThirtyFirstPick() {
    const searchElement = document.getElementById('player31');
    const searchValue = searchElement.value;

    if(searchValue.toLowerCase() === 'Ricky Pearsall'.toLowerCase() || searchValue.toLowerCase() === 'Pearsall'.toLowerCase()) {
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'Ricky Pearsall';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
    }
}

const thirtySecondPickInput = document.getElementById('thirySecondPick');
thirtySecondPickInput.addEventListener('click', correctThirtySecondPick);

function correctThirtySecondPick() {
    const searchElement = document.getElementById('player32');
    const searchValue = searchElement.value;

    if(searchValue.toLowerCase() === 'Xavier Legette'.toLowerCase() || searchValue.toLowerCase() === 'Legette'.toLowerCase()) {
        searchElement.style.backgroundColor = 'green';
        searchElement.readOnly = true;
        searchElement.value = 'Legette';
        endGame();
    } else {
        searchElement.style.backgroundColor = 'red';
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

    if(correctAnswerCounter === 32) {
        setTimeout(() => {
            alert("Good Job!");
        }, 1000);
    }
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
