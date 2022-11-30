const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model{}

User.init(
    {   
        name: {
            type: DataTypes.STRING,
        },

        height: {
            type: DataTypes.INTEGER,
        },

        weight: {
            type: DataTypes.INTEGER,
        },

        age: {
            type: DataTypes.INTEGER,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'workout'
      }   
);

module.exports = User;