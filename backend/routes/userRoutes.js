import express from 'express'
const router = express.Router()
import { registerUser, authUser, getUserById, getUserProfile } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'


router.route('/login').post(authUser)
router.route('/:id').get(getUserById)
router.route('/profile').get(protect, getUserProfile)
router.route('/').post(registerUser)

export default router