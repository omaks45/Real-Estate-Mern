/**
 * Sign up a new user.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Promise<void>} - A promise that resolves when the user is created successfully.
 * @throws {Error} - If there is an error while creating the user.
 */
import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'


export const signUp = async (req, res, next) => {

    const { username, email, password } = req.body
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({ username, email, password: hashedPassword })
    try {
        await newUser.save()
        res.status(201).json({
            "message": "user created successfully!!"
        })
    } catch(error) {
      next(error)
    }
    
}