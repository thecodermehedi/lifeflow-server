const app = require("./src/app");
const {port} = require("./src/config");
const connectDB = require("./src/db/connectDB");
const handleAllErrors = require("./src/utils/error");

// handling all unhandled routes
app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});



app.use(handleAllErrors);

const runServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

runServer();
