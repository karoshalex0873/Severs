import express from 'express'
import dotenv from 'dotenv'
import NewsRoutes from './routes/NewsRoutes'
import ussdRoutes from './routes/ussdRoutes'




dotenv.config()

const app= express()
const PORT = process.env.PORT

app.use(express.json())

app.get('/api/v1', (req, res) => {
  res.status(200).json({
    message:'WELCOME TO AI POWERED NEWS_APP FROM SCRAPPING ONLINE NEWS'
  })
})

app.use('/api/v1',NewsRoutes)
app.use('/api/v1',ussdRoutes)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}🚀🚀 `)
})