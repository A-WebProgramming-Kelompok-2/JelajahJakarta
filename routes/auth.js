const express= require('express'),
    router = express.Router();

module.exports = router;

router.get('/login', (req,res)=>{

    res.render('pages/login');
});