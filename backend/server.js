import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import courseRoutes from './routes/courseRoutes.js'
import paymentRoutes from './routes/paymentRoutes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173' }))
app.use(express.json())

app.get('/api/health', (req, res) => res.json({ status: 'ok' }))

app.use('/api/auth', authRoutes)
app.use('/api/courses', courseRoutes)
app.use('/api/payment', paymentRoutes)

app.use((req, res) => res.status(404).json({ message: 'Route not found.' }))

app.listen(PORT, () => {
  console.log(`BEMS Institute API running on http://localhost:${PORT}`)
})
