const { Model, DataTypes } = require("sequelize");
const sequelize = require("../connection/connection.js")

class Rating extends Model { }

Rating.init(

    {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        star_rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            //do I need a default star rating? would null affect average?
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id"
            }
        },
        game_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        modelName: "rating",
        freezeTableName: true,
        underscored: true

    }
);

module.exports = Rating;