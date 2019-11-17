var User = require("../models/User");

module.exports.getOne = (req, res, next) => {
    User.findOne({
        name: req.params.name
    }, "-password -tyype")
    .then((foundUser) =>{
        if(foundUser)
            console.log("existeeeeeeeeeeeee")//return res.status(200).json(foundUser);
        else
            console.log("Noooooo existeeee")//return res.status(400).json(null);
    })
    .catch(err =>{
        next(err);
    });
};

module.exports.logIn = (req, res, next) => {
    User.findOne({
        name: req.body.name,
        password: req.body.password
    }, "--tyype --email")
    .then((foundUser) =>{
        if(foundUser){
            console.log("Entrasteeeeeee");
            res.redirect('/welcome/');
        }
        else{
            console.log("Nooooo");
            res.redirect('/login/');
        }
    })
    .catch(err =>{
        next(err);
    });
};

module.exports.register = (req, res, next) => {
    User.findOne({
        name: req.body.name
    }, "-password -tyype -email")
    .then((foundUser) =>{
        if(foundUser) {
            throw new Error(`Usuario duplicado ${req.body.name}`);
        } else {
            let newUser = new User({
                name: req.body.name,
                password: req.body.password,
                tyype: req.body.tyype,
                email: req.body.email
            });
            newUser.save();
            res.redirect('/login/');
        }
    })
};