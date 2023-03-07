import { Course } from "../models/course";
import express from "express";

const coursesRouter = express.Router();
coursesRouter.post('/new', async (req, res) => {
  try {
    const course = new Course(req.body)
    await course.save()
    res.send(course)
  } catch(err) {
    console.error(err)
  }
})

coursesRouter.get('/all', async (req, res) => {
  try {
    const courses = await Course.find({})
    res.send(courses)
  } catch(err) {
    console.error(err)
  }
})

coursesRouter.put('/:id', async (req, res) => {
  try {
    await Course.findOneAndUpdate({_id: req.params.id}, req.body)
    res.send({message: "course updated"})
  } catch(err) {
    console.error(err)
  }
})

coursesRouter.delete('/:id', async (req, res) => {
  try {
    await Course.findOneAndDelete({_id: req.params.id})
    res.send({message: "course deleted"})
  } catch(err) {
    console.error(err)
  }
})

export default coursesRouter