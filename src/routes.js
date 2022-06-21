const express = require('express');
const homeController = require('../src/controllers/homeController');

const router = express.Router();

router.use('/',homeController);

module.exports = router;