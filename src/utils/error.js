const handleAllErrors = (err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || "Something went wrong";
  res.status(statusCode).send({
    message,
    statusCode,
  });
}
module.exports = handleAllErrors;