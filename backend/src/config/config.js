import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  corsOrigin: process.env.CORS_ORIGIN || '*',
  aiModelVersion: process.env.AI_MODEL_VERSION || 'nourish-predict-v2',
  defaultCity: process.env.DEFAULT_CITY || 'Bengaluru'
};
