import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
  title: String,
  description: String,
  dateCreated: Date,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
})

const Note = mongoose.model("Note", noteSchema)

export default Note