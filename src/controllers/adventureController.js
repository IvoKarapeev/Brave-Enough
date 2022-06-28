const router = require('express').Router();
const adventureService = require('../services/adventureService');

router.get('/all',async (req,res) => {

    const adventures = await adventureService.getAll();

    console.log(adventures);

    res.send('Adventures Here')

});



module.exports = router;