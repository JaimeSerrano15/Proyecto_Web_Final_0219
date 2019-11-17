var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController');

router.get('/', function(req,res,next){
    res.render('login');
});

router.post('/', function(req,res,next) {
    console.log(req.body.name);
    console.log(req.body.password);
    userController.logIn(req,res,next);
});

module.exports = router;