import express from "express"
import multer from "multer"
import { uploadPDF } from "../Controllers/Upload.js"

const uploadRouter = express.Router()

const upload = multer({ dest: "uploads/" })

uploadRouter.post("/", upload.single("file"), uploadPDF)

export default uploadRouter