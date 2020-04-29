import { Environment } from '../lib/enums';

export const CURRENT_ENVIRONMENT: Environment = process.env.APP_ENV as Environment;
