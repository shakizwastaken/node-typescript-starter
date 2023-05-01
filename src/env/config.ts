import { config as envConfig } from "dotenv";
import envVarsSchema from "./schema";

export const config = () => {
  envConfig();

  const { error } = envVarsSchema.validate({});
  if (error) {
    throw new Error(`Config validation error: ${error.message}`);
  }
};

export default config;
