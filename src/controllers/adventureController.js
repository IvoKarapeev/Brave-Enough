const router = require('express').Router();
const adventureService = require('../services/adventureService');
const { isAuth } = require('../middlewares/userMiddleware');

router.get('/all',async (req,res) => {
    
    const style = 'adventures.css';
    const adventures = await adventureService.getAll().lean();

    res.render('adventure/all-adventures', { style,adventures });

});


router.post('/create',async (req,res) => {

   
    const { name, image, description, price, places } = req.body;

    const adventureData = { 
        name,
        image,
        description,
        price,
        places
    };

    await adventureService.create(adventureData);

    res.send('Creating Adventures Here')

});


router.get('/details/:adventureId',async (req,res) => {
    
    const adventureId = req.params.adventureId;
    const adventure = await adventureService.getOneDetailed(adventureId).lean();
    const joined = adventure.joined;
    let isJoined = false;
    let hasPlaces = false;

    if (req.user) {        
        joined.forEach(adventurer => {
            if (adventurer._id == req.user._id) {
                isJoined = true;
            }
        });
    };

    if (adventure.places > 0) {
        hasPlaces = true;
    }

    const user = req.user;
    const style = 'details.css';

    res.render('adventure/details',{ style,adventure,user,isJoined,hasPlaces });

});


router.get('/join/:adventureId', isAuth ,async (req,res) => {

    try {
        const adventure = await adventureService.joinAdventure(req.params.adventureId,req.user._id);
        
        res.redirect(`/adventures/details/${req.params.adventureId}`);
        
    } catch (error) {

        const style = 'home.css';
        res.render('home', { style,error:error });
        
    }
});

module.exports = router;