import Sequelize from "sequelize";
import config from "./config.js";

const { database, username, password, host, port, dialect, timestamps } =
  config;

const db = new Sequelize(database, username, password, {
  host: host,
  port: port,
  dialect: dialect,
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  operatorAliases: false,
});

export default db;
