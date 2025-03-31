import fs from 'fs';

const rawData = fs.readFileSync('./json/nflplayers.json');
const nflplayers = JSON.parse(rawData);

const indexNumber = Math.floor(Math.random() * nflplayers.length);

for(let i = 0; i < nflplayers.length; i++) {
    let currentPlayer = nflplayers[i];

    if(currentPlayer.draft_year === "2024" && currentPlayer.position === 'QB') {
        console.log(currentPlayer.display_name);
    
    }
}