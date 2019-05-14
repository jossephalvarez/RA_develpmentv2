'use strict';
var bcrypt = require('bcrypt-nodejs');
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        surname: DataTypes.STRING,
        dni: DataTypes.STRING,
        nickname: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: DataTypes.STRING,
        address: DataTypes.STRING,
        is_provider: DataTypes.BOOLEAN,
        password: DataTypes.STRING,
        active: DataTypes.BOOLEAN
    }, {
        defaultScope: {
            attributes: {exclude: ['password']}
        }
    });
    User.beforeSave((user, options) => {
        if (user.changed('password')) {
            user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
        }
    });
    User.prototype.comparePassword = function (passw, cb) {
        console.log("PASSSS" + passw);
        bcrypt.compare(passw, this.password, function (err, isMatch) {
            if (err) {
                console.log("ERROR" + err);
                return cb(err);
            }
            cb(null, isMatch);
        });
    };
    User.associate = function (models) {
        User.hasMany(models.Supply)
    };
    return User;
};