const router = require("express").Router()
const {homepage, signUp} = require("../controllers/appController")

router.get("/homepage", homepage)
router.post("/signup", signUp)

module.exports = router

