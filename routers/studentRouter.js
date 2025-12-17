const {createStudent, getAllStudents, updateStudent, deleteStudent
} = require("../controllers/studentController")
const router = require("express").Router()
const { auth } = require("../utils/auth")
const { allowRoles } = require("../utils/roles")


router.post("/create", auth, allowRoles("teacher"), createStudent)
router.get("/allstudents", auth, allowRoles("teacher", "admin"), getAllStudents)
router.put("/update/:id", auth, allowRoles("admin"), updateStudent)
router.delete("/delete/:id", auth, allowRoles("admin"), deleteStudent)


module.exports = router
