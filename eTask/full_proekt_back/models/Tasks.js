import {DataTypes} from "sequelize";
import sequelize from "../services/sequelize.js";
import BaseModel from "./BaseModel.js";
import Categories from "./Categories.js";
import Users from "./Users.js";
import Joi from "joi";

class Tasks extends BaseModel {
    static rulesBody = (data) => {
        const schema =
            Joi.object().keys(
                {
                    title: Joi.string().required(),
                    color: Joi.string().required(),
                    status: Joi.string(),
                    description: Joi.string(),
                    userId: Joi.number().required(),
                    categoryId: Joi.number().required(),
                    email: Joi.string().email(),
                    telegram: Joi.string(),
                    issueDueDate: Joi.string(),
                    startedAt: Joi.string(),
                    finishedAt: Joi.string(),
                    isDone: Joi.bool(),
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

Tasks.init(
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
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'ACTIVE'
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telegram: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        issueDueDate: {
            type: DataTypes.DATE,

        },
        startedAt: {
            type: DataTypes.DATE,

        },
        finishedAt: {
            type: DataTypes.DATE,

        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        isDone: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
    },
    {
        sequelize,
        modelName: 'tasks',
        tableName: 'tasks',
    }
)


Tasks.belongsTo(Categories, {foreignKey: 'category_id', onDelete: 'CASCADE'});
Tasks.belongsTo(Users, {foreignKey: 'user_id', onDelete: 'CASCADE'});

Categories.hasMany(Tasks, {foreignKey: 'category_id'});
Users.hasMany(Tasks, {foreignKey: 'user_id'});


export default Tasks;
