
const jwt = require("jsonwebtoken")

exports.auth = (req, res, next) => {
    try {
  const token = req.headers.authorization?.split(" ")[1]

  if (!token) {
    return res.status(401).json({ message: "No token provided" })
  }

    const decoded = jwt.verify(token, "John")
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({ message: "Invalid token" })
  }
}
