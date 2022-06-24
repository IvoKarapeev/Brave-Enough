const express = require('express');
const homeController = require('../src/controllers/homeController');
const userController = require('../src/controllers/userController');

const router = express.Router();

router.use('/',homeController);
router.use('/users',userController);

module.exports = router;