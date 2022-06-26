const router = require('express').Router();


router.get('/',async (req,res) => {
    res.render('home');
});

router.get('/about',async (req,res) => {
    res.render('about');
});


module.exports = router;