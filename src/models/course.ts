import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({
  name: { type: String, required: true, minlength: 5 },
  price: { type: Number, required: true, min: 0 },
  isPublished: { type: Boolean, default: false },
  tags: { type: [String], default: [] },
  author: {type: mongoose.Schema.Types.ObjectId, ref:"Authors"}
})

export const Course = mongoose.model("Course", courseSchema);