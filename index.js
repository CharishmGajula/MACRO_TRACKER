
import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

import authRoutes from './routes/authRoute.js';
import userRoutes from './routes/userRoute.js';
import foodRoutes from './routes/foodRoute.js';
import  diaryRoutes from './routes/dairyRoute.js';

app.use('/api/auth', authRoutes);   
app.use('/api', userRoutes);        
app.use('/api', foodRoutes);       
app.use('/api', diaryRoutes);       

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});