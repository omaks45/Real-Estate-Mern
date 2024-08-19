import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.routes.js';
import dotenv from 'dotenv';
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to database');
})
.catch((err) => {
    console.log(err)
})

const app = express()

app.listen(3000, () => {
    console.log('app is listening on port 3000!!')
})

app.use("/api/user", userRouter)