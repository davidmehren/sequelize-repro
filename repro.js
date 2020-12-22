'use strict';
const {Sequelize, Op, Model, DataTypes} = require('sequelize');


const test = async function () {
    // database name is set to 'sequelize_test' in connection string
    const connectionString = 'mysql://sequelize_test:lollerskates@localhost/sequelize_test'


    // this works
    const sequelize = new Sequelize(connectionString)

    // constructor options object gets a different name, crashes
    // const sequelize = new Sequelize(connectionString, {database: 'foo'})


    const Foo = sequelize.define('Foo', {name: DataTypes.TEXT});
    await sequelize.sync();
    console.log("Success!")
};
test();
