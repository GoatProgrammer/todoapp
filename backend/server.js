import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'

//import routes 
import projectRoutes from './routes/projectRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

connectDB()

const app = express()

//middleware 
app.use(express.json())
app.use(cors())

// routes
app.get('/', (req, res) => {
  res.send("api is running")
})

app.use('/api/projects', projectRoutes)
app.use('/api/users', userRoutes)
app.use('/api/projects/delete', projectRoutes)


const PORT = process.env.PORT || 9000
app.listen(PORT, console.log(`Server running on port ${PORT}`))