import envVarsSchema from "./schema";

export const env = envVarsSchema.validate(process.env).value;
export default env;
