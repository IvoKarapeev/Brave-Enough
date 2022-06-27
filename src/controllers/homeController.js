const router = require('express').Router();


router.get('/',async (req,res) => {
    const style = 'home.css';
    res.render('home', {style});
});

router.get('/about',async (req,res) => {

    const style = 'about.css';
    res.render('about', { style });
});


module.exports = router;