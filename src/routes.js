const express = require('express');
const homeController = require('../src/controllers/homeController');
const userController = require('../src/controllers/userController');
const adventureController = require('../src/controllers/adventureController');

const router = express.Router();

router.use('/',homeController);
router.use('/users',userController);
router.use('/adventures',adventureController);
router.use('*',(req,res) => {
    res.send('Wrong url')
});


module.exports = router;