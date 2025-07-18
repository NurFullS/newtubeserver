import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
const PORT = 3005 || 3002

app.get('/', (req, res) => {
    res.json('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Server is running http:localhost:${PORT}`)
})