const Student = require("../models/student")


exports.createStudent = async (req, res) => {
    try {
  const createStudent = await Student.create({
    ...req.body,
    createdBy: req.user.id
  })

  res.status(201).json({
    message: "Student created successfully",
    data: createStudent
  })
} catch (error) {
    res.status(500).json({
        message:"Something went wrong",
        error:error.message
    })
}
}


exports.getAllStudents = async (req, res) => {
    try {
  const getallStudents = await Student.find()
  res.status(200).json({
            message:"All students fetched successfully",
            data:getallStudents
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}


exports.updateStudent = async (req, res) => {
    try {
  const updateStudents = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  res.status(200).json({
            message:"Student updated successfully",
            data:updateStudents
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}



exports.deleteStudent = async (req, res) => {
    try {
  const deletedStudent = await Student.findByIdAndDelete(req.params.id)
  res.status(200).json({
            message:"Student deleted successfully",
            data:deletedStudent
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

