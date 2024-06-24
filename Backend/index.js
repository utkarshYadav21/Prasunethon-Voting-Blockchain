import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRoute from './Routes/auth.js'



dotenv.config()
const app = express()
const port = 5000;
console.log(port)
const corsOptions = {
    origin:true
}
app.get('/',(req,res)=>{ 
    res.send('Api is working')
})
mongoose.set('strictQuery',false)
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB")
    } catch(err) {
        console.error("Error connecting to MongoDB:", err.message);
    }
}

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use('/api/v1/auth',authRoute)

app.listen(port,()=>{
    connectDB();
    console.log(`Server is running on port = ${port}`)
})