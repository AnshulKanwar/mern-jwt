import { hash, compare } from "bcrypt";
import User from "../models/User.js";
import { generateAccessToken, verifyToken } from "../utils.js";

export const login = async (req, res) => {
  const { username, password } = req.body;

  if (!(username && password)) {
    res.status(400).json({ message: "username/password is missing" });
    return;
  }

  const user = await User.findOne({ username });

  if (user && (await compare(password, user.password))) {
    const token = generateAccessToken({ username });
    res.status(200).json({ token });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
};

export const register = async (req, res) => {
  const { username, password } = req.body;

  if (!(username && password)) {
    res.status(400).json({ message: "username/password is missing" });
    return;
  }

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(409).json({ message: "This user already exists" });
  }

  const encryptedPassword = await hash(password, 10);

  await User.create({
    username,
    password: encryptedPassword,
  });

  const token = generateAccessToken({ username });

  res.json({ token });
};

export const authenticateToken = (req, res, next) => {
  const token = req.header("x-access-token");

  if (token == null)
    return res
      .status(401)
      .json({ message: "access token not provided" });
  try {
    const { username } = verifyToken(token);
    req.body.username = username
  } catch {
    return res.status(401).send("Invalid Token");
  }

  next();
};
