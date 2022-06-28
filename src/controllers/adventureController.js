const router = require('express').Router();
const adventureService = require('../services/adventureService');

router.get('/all',async (req,res) => {

    const adventures = await adventureService.getAll();

    console.log(adventures);

    res.send('Adventures Here')

});

router.post('/create',async (req,res) => {

   
    const { name, image, description, price } = req.body;

    const adventureData = { 
        name,
        image,
        description,
        price
    };

    await adventureService.create(adventureData);

    res.send('Creating Adventures Here')

});



module.exports = router;