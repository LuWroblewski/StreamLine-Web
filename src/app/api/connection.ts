import { Client } from 'pg';
import * as dotenv from 'dotenv';
const { Pool } = require('pg');

const user = process.env.PGUSER;
const host = process.env.PGHOST;
const database = process.env.PGDATABASE;
const password = process.env.PGPASSWORD;

dotenv.config();

export const client = new Pool({
  connectionString: `postgres://${user}:${password}${host}/${database}`,
  ssl: true,
});
