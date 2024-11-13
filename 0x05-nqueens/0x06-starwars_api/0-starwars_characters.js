#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const filmEndPoint = `https://swapi-api.hbtn.io/api/films/${movieId}`;

// Function to fetch character names in order
const getCharacterNames = async () => {
  // Request the film data
  request(filmEndPoint, (err, res, body) => {
    if (err || res.statusCode !== 200) {
      console.error('Error:', err || `StatusCode: ${res.statusCode}`);
      return;
    }

    // Parse the response and get character URLs
    const jsonBody = JSON.parse(body);
    const characters = jsonBody.characters;

    // Fetch each character's name in sequence
    characters.forEach((characterURL) => {
      request(characterURL, (err, res, body) => {
        if (err || res.statusCode !== 200) {
          console.error('Error:', err || `StatusCode: ${res.statusCode}`);
          return;
        }

        // Print each character's name in the order they appear
        const character = JSON.parse(body);
        console.log(character.name);
      });
    });
  });
};

// Execute the function
getCharacterNames();
