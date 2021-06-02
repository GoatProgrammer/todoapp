import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const todoSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  pID: {
    type: Number,
    ref: 'Project'
  },
  completed: {
    type: Boolean,
    default: 0
  },
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    required: false;
    ref: 'User'
  }]
  
  {
    timestamps: True
  }
})

const ToDo = mongoose.model('ToDo', todoSchema)

export default ToDo