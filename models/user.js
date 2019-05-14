var bcrypt = require('bcrypt');
'use strict';
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
      hooks: {
            beforeCreate: (user) => {
                const salt = bcrypt.genSaltSync();
                user.password = bcrypt.hashSync(user.password, salt);
            }
        },
        instanceMethods: {
            validPassword: function (password) {
                return bcrypt.compareSync(password, this.password);
            }
        }

    });

    User.associate = function (models) {
        User.hasMany(models.Supply)
    };
    return User;
};