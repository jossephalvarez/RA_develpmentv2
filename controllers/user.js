const User = require('../models').User;

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
        return User
            .create({
                name: req.body.name,
                surname: req.body.surname,
                dni: req.body.dni ||'',
                nickname: req.body.nickname||'',
                phone: req.body.phone||'',
                address: req.body.address||'',
                email: req.body.email,
                is_provider: req.body.is_provider||false,
                password: req.body.password,
                active: true
            })
            .then((user) => res.status(201).send(user))
            .catch((error) => res.status(400).send(error));
    }
};