require("dotenv/config");

const { PG_USERNAME, PG_PASSWORD, PG_HOST, PG_DATABASE_NAME, NODE_ENV } = process.env;

const defaultConfig = {
  username: PG_USERNAME,
  password: PG_PASSWORD,
  database: `${PG_DATABASE_NAME}_${NODE_ENV}`,
  host: PG_HOST,
  dialect: "postgres"
};

module.exports = {
  "development": defaultConfig,
  "test": defaultConfig,
  "production": defaultConfig
}
