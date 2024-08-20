import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js'
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

app.use(express.json());

app.listen(3000, () => {
    console.log('app is listening on port 3000!!')
})


app.use("/api/user", userRouter)
app.use("/api/auth/", authRouter)