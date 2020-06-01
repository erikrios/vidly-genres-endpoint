const express = require('express');
const Joi = require('joi');
const app = express();
const PORT = 3000;

app.use(express.json());

const genres = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Horror' },
    { id: 3, name: 'Romance' },
];

app.get('/api/genres', (req, res) => {
    res.send(genres);
});

app.listen(PORT, () => {
    console.log(`The server running on: ${PORT}...`);
})