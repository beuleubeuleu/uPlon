import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  isPublished: { type: Boolean, default: false }
})

export const Course = mongoose.model("Course", courseSchema);