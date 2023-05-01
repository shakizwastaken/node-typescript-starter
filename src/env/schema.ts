import joi from "joi";

export interface EnvVars {
  NODE_ENV: "development" | "production";
}

const envVarsSchema: joi.ObjectSchema<EnvVars> = joi.object({
  NODE_ENV: joi
    .string()
    .allow("development", "production")
    .default("development")
    .optional(),
});

export default envVarsSchema;
