export const responseMessages = {
  BAD_REQUEST: "Bad request",   
  INVALID_EMAIL_PWD: "Invalid email or password",
  PERMISSION_DENIED: "Permission denied",
  AUTH_FAIL: "Authentication failed",
};

export const notificationPayload = {};

export const statusCodes = {
  SUCCESS: 200,
  RECORD_CREATED: 201,
  RECORD_NOT_FOUND: 204,
  RECORD_ALREADY_REPORTED: 208,
  BAD_REQUEST: 400,
  AUTH_ERROR: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INVALID_REQUEST: 405,
  UNPROCESSABLE: 422,
  RECORD_ALREADY_EXISTS: 409,
  SERVER_ERROR: 500,
};

  const makeResponse = async (
    res,
    statusCode,
    success,
    message,
    payload = null,
  ) =>
    new Promise((resolve) => {
      const responseObj = {
        success,
        code: statusCode,
      };

      if (message !== null) {
        responseObj.message = message;
      }
  
      if (payload !== null) {
        responseObj.data = payload;
      }
  
      res.status(statusCode).send(responseObj);
      resolve(statusCode);
    });

export { makeResponse };
