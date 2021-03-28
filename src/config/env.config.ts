import * as dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const APP = {
  env: process.env.APP_ENV,
  port: process.env.APP_PORT,
};

const DATABASE = {
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: process.env.DB_DIALECT,
};

export { APP, DATABASE };
