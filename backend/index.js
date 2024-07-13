import express from "express"
import cors from 'cors'
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRoutes from "./routes/userRoutes.js"
import postRoutes from "./routes/postRoutes.js"

const app = express()

dotenv.config()

app.use(cors())

app.use(express.json())

app.use('/api/users' , userRoutes)
app.use('/api/posts' , postRoutes)

mongoose.connect(process.env.MONGO_URL)
.then(app.listen(4000 , () => { console.log(`server is running at ${process.env.PORT}`)}))
.catch((error) => console.log(error))
