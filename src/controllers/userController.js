const router = require('express').Router();
const userService = require('../services/userService');
const { COOKIE_SESSION_USER } = require('../../config/env');
const { isGuest, isAuth } = require('../middlewares/userMiddleware');


router.get('/login',isGuest,async (req,res) => {
    const style = 'login.css'

    res.render('user/login', { style });
});

router.post('/login',isGuest,async (req,res) => {
    
    const { email,password } = req.body;
    const style = 'home.css';

    try {
        
        const user = await userService.login(email,password);
        const token = await userService.createToken(user);

        res.cookie(COOKIE_SESSION_USER, token, {httpOnly:true} );
        res.redirect('/');

    } catch (error) {
        
        if (error.error) {
            
            res.render('home',{ style, error:error.error })
        }else {

            res.render('home',{style,error})
        };

    }

});

router.get('/register',isGuest,async (req,res) => {
    const style = 'registration.css'
    res.render('user/register',{ style });
});

router.post('/register',isGuest,async (req,res) => {
    
    const { email,password,repeatPassword } = req.body
    const style = 'home.css';

    if (password !== repeatPassword) {
        //error for the password
        return res.render('home',{ style,error:'Passwords shoud be equal '})
    };

    try {
        const user = await userService.create(email,password);
        const token = await userService.createToken(user);

        res.cookie(COOKIE_SESSION_USER, token, {httpOnly:true});
        res.redirect('/');
        
    } catch (error) {
        if (error.error) {
            
            res.render('home',{ style, error:error.error })
        }else {

            res.render('home',{style,error})
        };
    };
});


router.get('/logout',isAuth,async (req,res) => {
   
    res.clearCookie(COOKIE_SESSION_USER);
    res.redirect('/');
});

router.get('/profile',isAuth,async (req,res) => {
   
    

});

module.exports = router;