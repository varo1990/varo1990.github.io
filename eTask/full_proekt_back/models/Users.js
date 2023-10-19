import { DataTypes, Model } from "sequelize";
import sequelize from "../services/sequelize.js";
import md5 from "md5";

const { PASSWORD_SECRET } = process.env;

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
  },
  lastVisit: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('active', 'pending', 'block'),
    allowNull: false,
    // default: 'pending'
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