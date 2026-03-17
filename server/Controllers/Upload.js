import prisma from "../db.js"
import { extractTextFromPDF } from "../Services/pdfservice.js" 

export const uploadPDF = async (req, res) => {
  try {
    const file = req.file

    if (!file) {
      return res.status(400).json({ error: "No file uploaded" })
    }

    const text = await extractTextFromPDF(file.path)

    // Store basic document info
    const doc = await prisma.document.create({
      data: {
        title: file.originalname,
      },
    })

    res.json({
      message: "PDF uploaded and processed",
      preview: text.substring(0, 300),
      documentId: doc.id,
    })

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Failed to process PDF" })
  }
}