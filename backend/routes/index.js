var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

/*router.post('/login/:name', function(req,res,next){
  userController.getOne(req, res, next);
});*/

router.get('/welcome', function(req,res,next){
  res.render('welcome');
});

module.exports = router;
