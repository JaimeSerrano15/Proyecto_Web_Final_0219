var User = require("../models/User");

module.exports.getOne = (req, res, next) => {
    User.findOne({
        name: req.params.name
    }, "-password -tyype -email")
    .then((foundUser) =>{
        if(foundUser)
            return res.status(200).json(foundUser);
        else
            return res.status(400).json(null);
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
            return newUser.save();
        }
    }).then(user =>{
        return res 
            .header('Location', '/users/' + user._id)
            .status(201)
            .json({
                _id: user._id
            });
    }).catch(err => {
        console.log(err);
    });
};