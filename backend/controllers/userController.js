import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'


// @desc Register a new User 
// @route Post /api/users 
// @access Public 
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

//@desc Get user profile 
//@route GET /api/users/profile 
//@access Private  
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

//@desc Auth user 
//@Route Post /api/users/login 
//@Access Public 
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

//@desc Auth user 
//@Route Get /api/users/:id 
//@Access Private 
const getUserById = asyncHandler(async (req, res) => {
  const id = req.params.id

  const user = await User.findById(id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
    })
  } else {
    res.status(401)
    throw new Error('User not found') // but the user should always exist so this never gets called
  }

})

export {
  registerUser,
  authUser,
  getUserById,
  getUserProfile
}