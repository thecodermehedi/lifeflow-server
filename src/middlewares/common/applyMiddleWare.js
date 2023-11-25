const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const morgan = require('morgan');
const {
  clientUrlDev,
  clientUrlProd,
  clientUrlBackup,
  clientUrlBackup2,
} = require("../../config");

const applyMiddleWare = (app) => {
  app.use(
    cors({
      origin: [clientUrlDev, clientUrlProd, clientUrlBackup, clientUrlBackup2],
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(cookieParser());
  app.use(morgan('dev')); // log every request to the console
};

module.exports = applyMiddleWare;
