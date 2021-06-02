import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import projects from './data/projects.js'
import Project from './models/projectModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    // await Project.insertMany()

    const createdProject = await Project.insertMany(projects)
    console.log('Data Imported!'.green.inverse)

  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  const destroyData = async () => {
    try {

      await Project.deleteMany()

      console.log('Data Destroyed!'.red.inverse)

      process.exit()

    } catch (error) {
      console.error(`${error}`.red.inverse)
      process.exit(1)
    }
  }

} else {
  importData()
}