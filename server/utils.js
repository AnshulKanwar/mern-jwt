import jwt from "jsonwebtoken"

export const generateAccessToken = payload => {
  return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '1800s' })
}

export const verifyToken = token => {
  const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
  return decoded
}