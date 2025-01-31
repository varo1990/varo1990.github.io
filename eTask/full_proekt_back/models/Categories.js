import {DataTypes, Model} from "sequelize";
import sequelize from "../services/sequelize.js";
import Joi from "joi";
import BaseModel from "./BaseModel.js";
import Users from "./Users.js";

class Categories extends BaseModel {
    static rulesBody = (data) => {
        const schema =
            Joi.object().keys(
                {
                    title: Joi.string().required(),
                    userId: Joi.number().required(),
                    color: Joi.string().required(),
                    description: Joi.string(),
                    isActive: Joi.bool(),
                }
            );

        if (Array.isArray(data)) {
            return Joi.array().items(schema).validate(data);
        }

        return schema.validate(data);
    }

    static rulesQuery = (data) => {
        const schema =
            Joi.object().keys(
                {
                    id: Joi.number().required(),
                }
            );

        return schema.validate(data);
    }
}

Categories.init(
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
    },
    {
        sequelize,
        modelName: 'categories',
        tableName: 'categories',
    }
)

Categories.belongsTo(Users, {foreignKey: 'user_id', onDelete: 'CASCADE'});
Users.hasMany(Categories, {foreignKey: 'user_id'});


export default Categories;
