import { config as envConfig } from "dotenv";

import envVarsSchema from "./schema";
import { join } from "path";

export const config = () => {
  const path = join(__dirname, "../../.env");

  //full path
  envConfig({ path });

  const { error } = envVarsSchema.validate(process.env);
  if (error) {
    throw new Error(`Config validation error: ${error.message}`);
  }
};

export default config;
