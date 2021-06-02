import e from 'express'
import asyncHandler from 'express-async-handler'
import Project from '../models/projectModel.js'
import slugify from 'slugify'

// @desc gets all projects  
// @route GET /api/projects 
// @access Private * users need an account before they can add projects an dto do
const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find()
  if (projects) {
    res.json(projects)
  } else {
    res.status(404)
  }

})

// @desc delete project by id 
// @route GET /api/projects 
// @access Private
const deleteProject = asyncHandler(async (req, res) => {
  const id = req.params.id

  const projects = await Project.findById(id)

  if (projects) {
    // delete
    await Project.deleteOne({ _id: id })
    res.redirect("http://localhost:3000")
  } else {
    res.status(404)
    throw new error(`Project not found`)
  }
})

// @desc Add Project 
// @route Add /api/projects 
// @access Private
const addProject = asyncHandler(async (req, res) => {
  // project slug *** 
})

// @desc Update Project 
// @route put /api/projects 
// @access Private
const updateProject = asyncHandler(async (req, res) => {

})


export {
  getProjects,
  deleteProject,
  addProject,
  updateProject,
}