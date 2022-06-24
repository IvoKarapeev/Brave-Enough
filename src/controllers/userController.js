const router = require('express').Router();


router.get('/login',async (req,res) => {
    res.render('user/login');
});


router.get('/register',async (req,res) => {
    res.render('user/register');
});

module.exports = router;