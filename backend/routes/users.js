var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController');

router.get('/:name', userController.getOne);
router.get('/', (req,res,next) =>{
  res.render('users');
})

router.post('/', function(req,res,next){
  userController.register(req,res,next);
});

module.exports = router;