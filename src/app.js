const express = require("express");
const app = express();
const locationRouter = require("./routes/location");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const requestRouter = require("./routes/request");
const applymiddleware = require("./middlewares/applymiddleware");
const blogRouter = require("./routes/blog");
const fundingRouter = require("./routes/funding");

// Middlewares
applymiddleware(app);

// Routes
app.use(locationRouter);
app.use(authRouter);
app.use(userRouter);
app.use(requestRouter);
app.use(blogRouter);
app.use(fundingRouter);
app.get("/health", (req, res) => {
  res.status(200).json({status: "Server is healthy"});
});

module.exports = app;
