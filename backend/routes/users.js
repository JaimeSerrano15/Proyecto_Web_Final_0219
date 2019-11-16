var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController');

router.get('/:name', userController.getOne);
router.get('/', (req,res,next) =>{
  res.render('users');
})

router.post('/', userController.register);

module.exports = router;