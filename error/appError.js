class AppError extends Error {
  constructor(message, statusCode, apiError) {
    super(message);
    this.errorCode = statusCode;
    this.code = apiError;
    let errorType;
    switch (statusCode) {
      case 400:
        errorType = "invalidRequestError";
        break;
      case 401:
      case 403:
        errorType = "authenticationError";
        break;
      case 402:
        errorType = "requestFailedError";
        break;
      case 404:
        errorType = "notFoundError";
        break;
      case 409:
        errorType = "duplicateFieldError";
        break;
      case 422:
        errorType = "validationError";
        break;
      case 429:
        errorType = "rateLimitError";
        break;
      default:
        errorType = "apiConnectionError";
    }
    this.type = errorType;
    Error.captureStackTrace(this, this.constructor);
  }
}
module.exports = AppError;
