import {Model} from "sequelize";
import Joi from "joi";

class BaseModel extends Model {
    /**
     * example
     *
     *     const schema =
     *         Joi.object().keys(
     *             {
     *                 title: Joi.string().required(),
     *                 color: Joi.string().required(),
     *             }
     *         );
     *
     *     return schema.validate(data);
     */
    static rulesBody = (data) => {
        throw new Error('"rulesBody" is not implemented.');
    }
    /**
     * example
     *
     *
     *   const schema =
     *             Joi.object().keys(
     *                 {
     *                     id: Joi.number().required(),
     *                 }
     *             );
     *
     *         return schema.validate(data);
     */

    static rulesQuery = (data) => {
        throw new Error('"rulesQuery" is not implemented.');
    }
}

export default BaseModel;
