//Created By: Evan Welborn
//This file filters out the nflplayer.json

import fs from 'fs';

fs.readFile('nflplayers.json', 'utf8', (err, jsonString) => {
    if(err) {
        console.log("File read failed: ", err);
        return;
    }
    try{
        const players = JSON.parse(jsonString);

        const filteredPlayers = players.map(({
            display_name,
            position,
            latest_team,
            draft_year,
            draft_round,
            draft_pick,
            draft_team,
            college_name,
            college_conference,
            jersey_number,
            nfl_id
        }) => ({
            name: display_name,
            position,
            team: latest_team,
            draft: {
                year: draft_year,
                round: draft_round,
                pick: draft_pick,
                team: draft_team
            },
            college: {
                name: college_name,
                conference: college_conference
            },
            number: jersey_number,
            id: nfl_id
        }));

        fs.writeFile('filteredPlayers.json', JSON.stringify(filteredPlayers, null, 2), (err) => {
            if(err) {
                console.log("File write failed: ", err);
                return;
            }
            console.log("File write successful");
        });
    } catch(parseError) {
        console.log("Error parsing JSON string: ", parseError);
    }
});