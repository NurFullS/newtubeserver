import express from 'express'
import cors from 'cors'

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