module.exports = (sequelize, datatype) => {

    const User = sequelize.define('user', {
        username: {
            type: datatype.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: 'Username has been taken'
            },
            validate: {
                notNull: {
                    msg: 'Username cannot be null'
                },
                len: {
                    args: [5, 12],
                    msg: 'Username cannot lower than 5 and 12 characters'
                },
                notEmpty: {
                    args: true,
                    msg: 'Username length cannot be empty'
                },
                not: {
                    args: /\s/,
                    msg: 'Username cannot contains white space'
                }
            }
        },
        email: {
            type: datatype.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: 'Email has been taken'
            },
            validate: {
                notNull: {
                    msg: 'Email cannot be null'
                },
                notEmpty: {
                    args: true,
                    msg: 'Email length cannot be empty'
                }
            }
        },
        password: {
            type: datatype.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Password cannot be null'
                },
                notEmpty: {
                    args: true,
                    msg: 'Password length cannot be empty'
                }
            }
        },
        firstname: {
            type: datatype.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Firstname cannot be null'
                },
                notEmpty: {
                    args: true,
                    msg: 'Firstname length cannot be empty'
                }
            }
        },
        lastname: {
            type: datatype.STRING,
            allowNull: true
        }
    })

    return User

}