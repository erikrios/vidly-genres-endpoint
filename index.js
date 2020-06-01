const express = require('express');
const Joi = require('joi');

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`The server running on: ${PORT}...`);
})