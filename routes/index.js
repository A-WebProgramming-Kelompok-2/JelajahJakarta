const express= require('express'),
    router = express.Router();

    router.get('/',(req,res)=>{
        res.render('pages/index');
    });
    
    router.get('/popular',(req,res)=>{
        res.render('pages/popular');
    });
    
    router.get('/amusement-water park',(req,res)=>{
        res.render('pages/amusement-water park');
    });
    
    router.get('/beach-island',(req,res)=>{
        res.render('pages/beach-island');
    });
    
    router.get('/culinary',(req,res)=>{
        res.render('pages/culinary');
    });
    
    router.get('/experience',(req,res)=>{
        res.render('pages/experience');
    });
    
    router.get('/jakarta-history-places',(req,res)=>{
        res.render('pages/jakarta-history-places');
    });
    
    router.get('/lake-garden',(req,res)=>{
        res.render('pages/lake-garden');
    });
    
    router.get('/amusement-water park',(req,res)=>{
        res.render('pages/amusement-water park');
    });
    
    router.get('/tips',(req,res)=>{
        res.render('pages/tips');
    });
    
    router.get('/zoo',(req,res)=>{
        res.render('pages/zoo');
    });
    
    router.get('/mybooking',(req,res)=>{
        res.render('pages/mybooking');
    });

module.exports = router;