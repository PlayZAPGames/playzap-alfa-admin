import Joi from "joi";

// Validation Cases
export const validationSchema = (action) => {
  switch (action) {
    case "ADMIN_LOGIN": {
      return {
        password: Joi.string().required(),
        email: Joi.string().required()
      };
    }

    case "SETUP_2FA": {
      return {
        email: Joi.string().required(),
        otp: Joi.string().required(),
        secret: Joi.string().required()
      };
    }
  }
  return {};
};

