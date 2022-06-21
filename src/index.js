const express = require('express');
const { initizeDatabase } = require('../config/database');
const { PORT } = require('../config/env');

const app = express();


initizeDatabase()
    .then(() => {
        app.listen(PORT,() => console.log(`Server is listening on port ${PORT}`));
    })
    .catch((err) => {
        console.log(err);
    })