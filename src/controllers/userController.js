const router = require('express').Router();
const userService = require('../services/userService');


router.get('/login',async (req,res) => {
    const style = 'login.css'

    res.render('user/login', { style });
});

router.post('/login',async (req,res) => {
    


});

router.get('/register',async (req,res) => {
    const style = 'registration.css'
    res.render('user/register',{ style });
});

router.post('/register',async (req,res) => {
    
    const { email,password,repeatPassword } = req.body

    if (password !== repeatPassword) {
        //error for the password
        return res.render('user/register')
    };

    try {
        const user = await userService.create(email,password);
        const token = await userService.createToken(user);

        
    
        
    } catch (error) {
        
    }

    res.redirect('/')

});

module.exports = router;