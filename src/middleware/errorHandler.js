import createHttpError from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  console.error('Error Middleware', err);

  const statusCode =
    err instanceof createHttpError.HttpError ? err.statusCode : 500;

  res.status(statusCode).json({
    message: err.message || 'Internal Server Error',
  });
};
