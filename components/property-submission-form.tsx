"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Upload } from "lucide-react"

export default function PropertySubmissionForm() {
  const [formData, setFormData] = useState({
    name: "",
    symbol: "",
    institution: "",
    address: "",
    supply: "",
    yield: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container max-w-2xl">
        <div className="rounded-xl bg-white p-6 shadow-lg">
          <h1 className="mb-2 text-2xl font-bold text-gray-900">Token Mint Form</h1>
          <p className="mb-6 text-sm text-gray-600">Complete all required information to start the tokenization process.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your asset name"
                    className="bg-white"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="symbol" className="mb-2 block text-sm font-medium text-gray-900">
                    RWA Symbol
                  </label>
                  <Input
                    id="symbol"
                    placeholder="Example: RENA"
                    className="bg-white"
                    value={formData.symbol}
                    onChange={(e) => setFormData({ ...formData, symbol: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="institution" className="mb-2 block text-sm font-medium text-gray-900">
                  Institution Name
                </label>
                <Input
                  id="institution"
                  placeholder="Your company or institution name"
                  className="bg-white"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="address" className="mb-2 block text-sm font-medium text-gray-900">
                  Institution Address
                </label>
                <Input
                  id="address"
                  placeholder="Full address of your institution"
                  className="bg-white"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="documents" className="mb-2 block text-sm font-medium text-gray-900">
                    Supporting Documents
                  </label>
                  <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-6">
                    <Upload className="mb-2 h-8 w-8 text-gray-400" />
                    <p className="mb-1 text-sm text-gray-500">Drag & drop file or <span className="text-[#14B8A6]">browse</span></p>
                    <p className="text-xs text-gray-400">(PDF, DOC, DOCX, JPG, JPEG, or PNG max 5MB)</p>
                  </div>
                </div>
                <div>
                  <label htmlFor="image" className="mb-2 block text-sm font-medium text-gray-900">
                    Supporting Image
                  </label>
                  <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-6">
                    <Upload className="mb-2 h-8 w-8 text-gray-400" />
                    <p className="mb-1 text-sm text-gray-500">Drag & drop file or <span className="text-[#14B8A6]">browse</span></p>
                    <p className="text-xs text-gray-400">(PDF, DOC, DOCX, JPG, JPEG, or PNG max 5MB)</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="supply" className="mb-2 block text-sm font-medium text-gray-900">
                    Total RWA Supply
                  </label>
                  <Input
                    id="supply"
                    placeholder="Example: 1000000"
                    className="bg-white"
                    value={formData.supply}
                    onChange={(e) => setFormData({ ...formData, supply: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="yield" className="mb-2 block text-sm font-medium text-gray-900">
                    Expected Yield
                  </label>
                  <Input
                    id="yield"
                    placeholder="Example: 8.50 (8.5% annual yield)"
                    className="bg-white"
                    value={formData.yield}
                    onChange={(e) => setFormData({ ...formData, yield: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="mb-2 block text-sm font-medium text-gray-900">
                  Brief Description
                </label>
                <Textarea
                  id="description"
                  placeholder="Describe the asset to be tokenized"
                  className="min-h-[120px] bg-white"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#14B8A6] to-[#0D9488] text-white hover:from-[#0D9488] hover:to-[#0B7A6E]"
            >
              Submit Mint Request →
            </Button>

            <p className="mt-4 text-xs text-gray-500">
              Please connect your wallet to submit a mint request
            </p>

            <p className="mt-6 text-xs text-gray-500">
              By submitting this form, you agree that the LandRa team will review your request and may contact you for
              additional information before proceeding with the tokenization process.
            </p>

            <p className="text-xs text-gray-400">
              Contract Address: 0x4884846287e8d0A0b2b32D45B82f2626E4A8b4E4
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}