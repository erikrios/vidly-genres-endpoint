const express = require('express');
const Joi = require('joi');

const app = express();

const PORT = 3000;

const genres = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Horror' },
    { id: 3, name: 'Romance' },
];

app.listen(PORT, () => {
    console.log(`The server running on: ${PORT}...`);
})