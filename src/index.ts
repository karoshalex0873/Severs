import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import NewsRoutes from './routes/NewsRoutes'
import ussdRoutes from './routes/ussdRoutes'
import mailRoutes from './routes/mailRoutes'

dotenv.config()

const app= express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors({
  origin:["http://localhost:5173","https://news-du2j.vercel.app"],
  methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}))


app.get('/api/v1', (req, res) => {
  res.status(200).json({
    message:'WELCOME TO AI POWERED NEWS_APP FROM SCRAPPING ONLINE NEWS 🚀🔥🔥'
  })
})

app.use('/api/v1',NewsRoutes)
app.use('/api/v1',ussdRoutes)
app.use('/api/v1',mailRoutes)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}🚀🚀 `)
})