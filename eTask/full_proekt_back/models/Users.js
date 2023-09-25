import { DataTypes, Model } from "sequelize";
import sequelize from "../services/sequelize.js";
import md5 from "md5";

const { PASSWORD_SECRET } = process.env;
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
class Users extends Model {

  static passwordHash = (pass) => md5(md5(pass + PASSWORD_SECRET))
}

Users.init({
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    default: '',
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    default: '',
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: 'email',
  },
  password: {
    type: DataTypes.CHAR(32),
    allowNull: false,
    set(val) {
      if (val) {
        this.setDataValue('password', Users.passwordHash(val))
      }
    },
    get() {
      return undefined
    }
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true,
    get() {
      const avatar = this.getDataValue('avatar');
      if (avatar) {
        return avatar;
      }
      const email = this.getDataValue('email').toLowerCase();
      return `https://www.gravatar.com/avatar/${md5(email)}?d=wavatar`
    }
  },
  lastVisit: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('active', 'pending', 'block'),
    allowNull: false,
  },
  isOnline: {
    type: DataTypes.BOOLEAN,
  },
  validationCode: {
    type: DataTypes.STRING,
    allowNull: true,
    get() {
      return undefined
    }
  }
}, {
  sequelize,
  modelName: 'users',
  tableName: 'users',
})

export default Users;