const express= require('express'),
    router = express.Router();

module.exports = router;

router.get('/login', (req,res)=>{

    res.render('pages/login');
});

router.get('/register', (req,res)=>{

    res.render('pages/register');
});

router.post('/register',(req,res)=>{
    res.render('pages/register');
});
