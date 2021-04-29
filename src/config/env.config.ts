import * as dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const APP = {
  env: process.env.APP_ENV,
  port: process.env.APP_PORT,
  secret: process.env.JWT_SECRET,
};

const JWT = {
  secret: process.env.JWT_SECRET,
  expires: process.env.JWT_EXPIRES,
};

const DATABASE = {
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: process.env.DB_DIALECT,
};

const FIREBASE = {
  serviceAccount: {
    type: process.env.FIREBASE_TYPE,
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY,
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URI,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
  },
  baseCollection: process.env.FIREBASE_DB,
  locationCollection: process.env.FIREBASE_LOCATION,
};

export {
  APP, JWT, DATABASE, FIREBASE,
};
