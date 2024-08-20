import express from 'express'
import { signUp } from '../controller/auth.controller.js'


const authRouter = express.Router()

authRouter.post('/signup', signUp)

export default authRouter