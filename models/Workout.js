const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model{}

Workout.init(
    {
        day: {
            type: Date,
            default: Date.now
        },

        workout_id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },

        excercises: {
            type: DataTypes.STRING,
        },

        name: {
            type: DataTypes.STRING,
        },

        duration: {
            type: DataTypes.INTEGER,
        },

        weight: {
            type: DataTypes.INTEGER,
        },

        reps: {
            type: DataTypes.INTEGER,
        },

        sets: {
            type: DataTypes.INTEGER,
        },

        distance: {
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

module.exports = Workout;