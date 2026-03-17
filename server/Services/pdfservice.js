import { createRequire } from "module"
import fs from "fs"

const require = createRequire(import.meta.url)
const pdf = require("pdf-parse")

export const extractTextFromPDF = async (filePath) => {
  const dataBuffer = fs.readFileSync(filePath)
  const pdfData = await pdf(dataBuffer)

  return pdfData.text
}