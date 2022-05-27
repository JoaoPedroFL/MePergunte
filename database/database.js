const Sequelize = require("sequelize")

const connection = new Sequelize('pergunte_me', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection