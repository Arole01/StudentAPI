const router = require("express").Router()
const {homepage, signUp,login} = require("../controllers/appController")

router.get("/homepage", homepage)
router.post("/signup", signUp)
router.post("/login",login)

module.exports = router

