const express = require("express");
const app = express();
const applyMiddleWare = require("./middlewares/common/applyMiddleware");
const locationRouter = require("./routes/location");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const requestRouter = require("./routes/request");

// Middleware
applyMiddleWare(app);

// Routes
app.use(locationRouter);
app.use(authRouter);
app.use(userRouter);
app.use(requestRouter);
app.get("/health", (req, res) => {
  res.status(200).json({status: "Server is healthy"});
});

module.exports = app;
