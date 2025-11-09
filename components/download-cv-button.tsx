"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { pdf } from "@react-pdf/renderer"
import { CVPDFDocument } from "./cv-pdf-document"

export function DownloadCVButton() {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownload = async () => {
    try {
      setIsGenerating(true)

      // Generate the PDF
      const blob = await pdf(<CVPDFDocument />).toBlob()

      // Create a download link
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "Leandri_de_Bruyn_CV.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      // Clean up
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error generating PDF:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Button
      size="lg"
      variant="outline"
      className="border-2 border-primary/30 hover:border-primary hover:bg-primary/5 text-base px-8 bg-transparent group"
      onClick={handleDownload}
      disabled={isGenerating}
    >
      <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
      {isGenerating ? "Generating PDF..." : "Download CV"}
    </Button>
  )
}

