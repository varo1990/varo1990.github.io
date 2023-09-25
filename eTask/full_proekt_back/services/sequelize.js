import { Op, Sequelize } from "sequelize";

const { MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, MYSQL_HOST, MYSQL_PORT } = process.env;

const operatorsAliases = {
  $and: Op.and,
  $or: Op.or,
  $in: Op.in
}

const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
  dialect: 'mysql',
  define: {
    underscored: true
  },
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  operatorsAliases
})

export default sequelize;