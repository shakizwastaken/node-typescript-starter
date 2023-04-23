import { config as envConfig } from "dotenv";

import joi from "joi";

const envVarsSchema = joi
  .object({
    NODE_ENV: joi
      .string()
      .allow("development", "production")
      .default("development")
      .optional(),
  })
  .unknown()
  .required();

export const config = () => {
  envConfig();

  const { error, value: envVars } = envVarsSchema.validate(process.env);
  if (error) {
    throw new Error(`Config validation error: ${error.message}`);
  }
};

export const env = envVarsSchema.validate(process.env).value;
export default env;
