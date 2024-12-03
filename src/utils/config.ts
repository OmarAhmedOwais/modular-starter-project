import Joi from 'joi';
import { IConfig } from '../../data/types';
import { envVarsSchema } from '../validation';

export const validateEnv = (
  obj: object,
): { error: Joi.ValidationError | undefined; value: IConfig } => {
  const { error, value } = envVarsSchema
    .prefs({ errors: { label: 'key' }, stripUnknown: true })
    .validate(obj);

  const matchedValues: Partial<IConfig> = {};
  for (const key in envVarsSchema.describe().keys) {
    if (value[key] !== undefined) {
      matchedValues[key as keyof IConfig] = value[key];
    }
  }

  return { error, value: matchedValues as IConfig };
};