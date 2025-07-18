import express from 'express'
import cors from 'cors'

const { Pool } = require('pg')

const pool = new Pool ({
  user: process.env.PGUSER,
  host: process.env.PGLOCALHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
})

const app = express()
const PORT = process.env.PORT || 3005

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json('Hello from Render!')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})