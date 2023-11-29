require("dotenv").config();

const config = {
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASS,
  dbName: process.env.DB_NAME,
  dbDevUri: process.env.DB_DEV_URI,
  dbProdUri: process.env.DB_PROD_URI,
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT || 3000,
  clientUrlDev: process.env.CLIENT_URL_DEV,
  clientUrlProd: process.env.CLIENT_URL_PROD,
  clientUrlBackup: process.env.CLIENT_URL_BACKUP,
  clientUrlBackup2: process.env.CLIENT_URL_BACKUP2,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
};

module.exports = config;
