import 'dotenv/config';

const requireVar = (key: string, value?: string) => {
  if (!value) throw new Error(`⚠️ Missing env var: ${key}`);
  return value;
};

export const env = {
  PORT: Number(process.env.PORT ?? 3000),
  DATABASE_URL: requireVar('DATABASE_URL', process.env.DATABASE_URL),
  JWT_SECRET: requireVar('JWT_SECRET', process.env.JWT_SECRET),
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN ?? '15m',
  REFRESH_EXPIRES_IN: process.env.REFRESH_EXPIRES_IN ?? '7d',
};
