import mongoose, { Schema } from "mongoose";

const authorSchema = new Schema({
  name: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
})

export const Author = mongoose.model('Author', authorSchema);