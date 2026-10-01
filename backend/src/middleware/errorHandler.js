/**
 * NourishLoop Centralized Error Handling Middleware
 */

export function errorHandler(err, req, res, next) {
  console.error('[API Error]:', err.stack || err.message);

  const statusCode = err.status || 500;
  res.status(statusCode).json({
    success: false,
    error: err.message || 'Internal Server Error',
    path: req.originalUrl,
    timestamp: new Date().toISOString()
  });
}
