const { Model, DataTypes } = require('sequelize');
const sequelize = require("../connection/connection.js")

class Comment extends Model { }
    
Comment.init(
{
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false,
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
    modelName: "comment",
    timestamps: true,
    freezeTableName: true,
    underscored: true
}

);

module.exports = Comment
