import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env only in development (production uses Render env variables)
if (process.env.NODE_ENV !== 'production') {
  const envPath = resolve(__dirname, '..', '.env');
  console.log('📁 Loading .env from:', envPath);
  dotenv.config({ path: envPath });
} else {
  console.log('✅ Production mode: using environment variables from Render');
}

console.log('GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID ? 'Found' : 'NOT FOUND');

export default process.env;