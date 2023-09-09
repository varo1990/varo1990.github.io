import { DataTypes, Model } from "sequelize";
import sequelize from "../services/sequelize.js";
import Users from "./Users.js";

class Task extends Model {

}

// Task.init({
//   id: {
//     type: DataTypes.BIGINT.UNSIGNED,
//     autoIncrement: true,
//     primaryKey: true,
//     allowNull: false
//   },
//  //
//
//
//   //
// }, {
//   sequelize,
//   modelName: 'task',
//   tableName: 'task',
// })



export default Task;