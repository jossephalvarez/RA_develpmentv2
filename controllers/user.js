const User = require('../models').User;
const jwt = require('jsonwebtoken');

module.exports = {
    list(req, res) {
        return User
            .all()
            .then((users) => res.status(200).send(users))
            .catch((error) => {
                res.status(400).send(error);
            });
    },
    add(req, res) {
        if (!req.body.email || !req.body.password) {
            res.status(400).send("Please pass username and password.");
        } else {
            return User
                .create({
                    name: req.body.name,
                    surname: req.body.surname,
                    dni: req.body.dni || '',
                    nickname: req.body.nickname || '',
                    phone: req.body.phone || '',
                    address: req.body.address || '',
                    email: req.body.email,
                    is_provider: req.body.is_provider || false,
                    password: req.body.password,
                    active: true
                })
                .then((user) => res.status(201).send("OK"))
                .catch((error) => res.status(400).send("ERROR"));

        }
    },
    login(req, res) {
        var email = req.body.email,
            password = req.body.password;
        if (!email || !password) {
            res.status(400).send("email and password is required");
        } else {
            return User
                .findOne({where: {email: email}})
                .then((user) => {
                    if (!user) {
                        return res.status(401).send({
                            message: 'Authentication failed. User not found.',
                        });
                    }
//                    res.status(200).send(user);

                    var token = jwt.sign(JSON.parse(JSON.stringify(user)), 'nodeauthsecret', {expiresIn: 86400 * 30});
                    jwt.verify(token, 'nodeauthsecret', function(err, data){
                        console.log(err, data);
                    })
                    res.json({success: true, token: 'JWT ' + token});
                 /*
                    user.comparePassword(password, (err, isMatch) => {
                        console.log("PASS"+password);
                        console.log("err"+err);
                        console.log("isMatch"+isMatch);
                        if (isMatch && !err) {
                         /!*   var token = jwt.sign(JSON.parse(JSON.stringify(user)), 'nodeauthsecret', {expiresIn: 86400 * 30});
                            jwt.verify(token, 'nodeauthsecret', function (err, data) {
                                console.log(err, data);
                            })
                            res.json({success: true, token: 'JWT ' + token});*!/
                            res.status(200).send(user);

                        } else {
                            res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
                        }
                    })*/
                    /*       else if (!user.comparePassword(password)) {
                               res.status(400).send("password is not correct");
                           } else {
                               res.status(200).send(user);
                           }*/
                })
                .catch((error) => res.status(400).send(error));
        }
    }

};