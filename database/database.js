const Sequelize = require("sequelize")

const connection = new Sequelize('pergunte_me', 'root', 'Estudant@1', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection