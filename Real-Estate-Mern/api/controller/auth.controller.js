import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'


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


export const signIn = async(req, res, next) => {
    try {
      const {email, password} = req.body;
      //check if the email exist
      const validUser = await User.findOne({email})
      if(!validUser) return next(errorHandler(404, 'User not found!'));
      //check if the password exist
      const validPassword = bcryptjs.compareSync(password, validUser.password)
      if(!validPassword) return next(errorHandler(401, 'invalid credential'));
      //creating a token
      const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET)
      //destructure the password to avoid sending it back to the user when signed in
      const { password: pass, ...rest} = validUser._doc
      //save the token as a cookie
      res.cookie('access_token', token, 
        {
            httpOnly: true, expires: new Date(Date.now() + 24 *60 *60 * 1000)
        }).status(200).json(rest)
    } catch(error) {
        next(error)
    };
};