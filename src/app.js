const express = require("express");
const app = express();
const applyMiddleWare = require("./middlewares/common/applyMiddleware");
const locationRouter = require("./routes/location");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");

// Middleware
applyMiddleWare(app);

// Routes
app.use(locationRouter);
app.use(authRouter);
app.use(userRouter);
app.get("/health", (req, res) => {
  res.status(200).json({status: "Server is healthy"});
});

module.exports = app;
