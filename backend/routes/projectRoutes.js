import express from 'express'
const router = express.Router()
import { getProjects, deleteProject } from '../controllers/projectController.js'
import { protect } from '../middleware/authMiddleware.js'

router.get('/', getProjects)
router.get('/delete/:id', deleteProject)

export default router