const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const {
  nodeEnv,
  clientUrlDev,
  clientUrlProd,
  clientUrlBackup,
  clientUrlBackup2,
} = require("../config");

const applymiddleware = (app) => {
  let corsOptions;

  if (nodeEnv === "production") {
    corsOptions = {
      origin: [clientUrlProd, clientUrlBackup, clientUrlBackup2],
      credentials: true,
    };
  } else {
    corsOptions = {
      origin: [clientUrlDev],
      credentials: true,
    };
  }
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(cookieParser());

  if (nodeEnv === "development") {
    app.use(morgan("dev"));
  }
};

module.exports = applymiddleware;
