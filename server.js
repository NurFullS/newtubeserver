import express from 'express'
import cors from 'cors'
import pkg from 'pg'
const { Pool } = pkg

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST, 
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: Number(process.env.PGPORT),
  ssl: {
    rejectUnauthorized: false, // ОБЯЗАТЕЛЬНО для Render PostgreSQL
  }
});

await pool.query(`
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT
  );
`);


const app = express()
const PORT = 3005

app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows)
  } catch (error) {
    console.error(error)
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})