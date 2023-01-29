import User from "../models/User.js";
import Note from "../models/Note.js";

export const getNotes = async (req, res) => {
  const { username } = req.body;

  if (!username) {
    res.status(400).json({ message: "username is required" });
    return;
  }

  const notes = await Note.find({ username }).sort({ dateCreated: -1 });
  res.status(200).json(notes);
};

export const createNote = async (req, res) => {
  const { title, description, username } = req.body;

  if (!username) {
    res.status(400).json({ message: "username is required" });
    return;
  }

  if (!title) {
    res.status(400).json({ message: "title is requried" });
    return;
  }

  const user = await User.findOne({ username });
  console.log(user);

  if (!user) {
    res.status(400).json({ message: "invalid user" });
  }

  const note = await Note.create({
    title,
    description,
    dateCreated: new Date(),
    user: user._id,
  });

  res.status(200).json(note);
};
