module.exports = (sequelize, datatype) => {

    const User = sequelize.define('user', {
        username: {
            type: datatype.STRING,
            allowNull: false,
            unique: true
        },
        firstname: {
            type: datatype.STRING,
            allowNull: false,
        },
        lastname: {
            type: datatype.STRING,
            allowNull: true
        }
    })

    return User

}