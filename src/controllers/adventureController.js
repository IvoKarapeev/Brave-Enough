const router = require('express').Router();
const adventureService = require('../services/adventureService');

router.get('/all',async (req,res) => {
    
    const style = 'adventures.css';
    const adventures = await adventureService.getAll().lean();

    res.render('adventure/all-adventures', { style,adventures });

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