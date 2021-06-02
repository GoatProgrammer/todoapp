import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const projectSchema = mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  projectOwner: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: 'User'
  },
  slug: {
    type: String,
    required: false
  },
  items: [{
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: 'ToDo'
  }]
})

const Project = mongoose.model('Project', projectSchema)

export default Project