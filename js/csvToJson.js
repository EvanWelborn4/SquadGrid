/*
By: Evan Welborn
 Description: This file is used to convert player stats from players.csv
 to a json file.
*/

const fs = require('fs');
const csv = require('csvtojson');
const csvFilePath = 'csv/player_stats_def_season.csv';
const jsonFilePath = 'json/nfl_defense_season.json';

csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        
        //JSON Format
        const jsonString = JSON.stringify(jsonObj, null, 2);

        fs.writeFile(jsonFilePath, jsonString, (err) => {
            if (err) {
                throw err;
            } else {
            console.log("JSON file has been saved.");
            }
        });
    })
    .catch((error) => {
        console.log("Error converting CSV to JSON: ",error);
    });

