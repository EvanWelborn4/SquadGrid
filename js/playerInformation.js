/*
Created by: Evan Welborn
Date: 2/17/2025
Description: This file will handle the conversion of player information from json to js.
*/
import fs from 'fs';

//Import the Database
const rawData = fs.readFileSync('./json/nflplayers.json');
const nflplayers = JSON.parse(rawData);

const playerName = nflplayers.map ((player) => player.display_name);

export {playerName};