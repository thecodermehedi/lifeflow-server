const mongoose = require("mongoose");
const {nodeEnv, dbPass, dbUser, dbName} = require("../config");

const getDbUri = () => {
  let dbUri;
  if (nodeEnv === "production") {
    dbUri = process.env.DB_PROD_URI;
    dbUri = dbUri.replace("<username>", dbUser);
    dbUri = dbUri.replace("<password>", dbPass);
    dbUri = dbUri.replace("<dbname>", dbName);
  } else {
    dbUri = process.env.DB_DEV_URI;
    dbUri = dbUri.replace("<username>", dbUser);
    dbUri = dbUri.replace("<password>", dbPass);
    dbUri = dbUri.replace("<dbname>", dbName);
  }
  return dbUri;
};

const connectDB = async () => {
  try {
    console.log("Connecting to DB...");
    const dbUri = getDbUri();
    await mongoose.connect(dbUri);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
