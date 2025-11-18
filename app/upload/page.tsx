'use client'

import { useState } from 'react'
import { Upload, FileText, Shield, CheckCircle, Lock } from 'lucide-react'

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!selectedFile) return

    setIsUploading(true)
    
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false)
      setUploadSuccess(true)
    }, 2000)
  }

  if (uploadSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="glass-card p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-neon-green/20 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-neon-green" />
            </div>
            <h2 className="text-4xl font-bold mb-4 gradient-text">Document Uploaded Successfully!</h2>
            <p className="text-xl text-gray-300 mb-8">
              Your document has been encrypted and secured on the blockchain
            </p>
            <div className="space-y-4 text-left glass-card p-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-neon-green mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">AES-256 Encryption Applied</p>
                  <p className="text-sm text-gray-400">Document encrypted with military-grade security</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-neon-green mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Blockchain Hash Generated</p>
                  <p className="text-sm text-gray-400 font-mono">
                    0x7f9c3d2a1b4e5f6c8d9a0e1f2b3c4d5e
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-neon-green mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Verification Ready</p>
                  <p className="text-sm text-gray-400">Your document is ready for verification requests</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center gap-4">
              <a href="/dashboard" className="btn-primary">
                Go to Dashboard
              </a>
              <button
                onClick={() => {
                  setUploadSuccess(false)
                  setSelectedFile(null)
                }}
                className="btn-secondary"
              >
                Upload Another
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Upload Identity Documents
          </h1>
          <p className="text-xl text-gray-300">
            Securely upload your documents with blockchain protection
          </p>
        </div>

        <div className="glass-card p-8 md:p-12">
          {/* Upload Area */}
          <div className="border-2 border-dashed border-dark-border rounded-2xl p-12 mb-8 text-center hover:border-neon-blue/50 transition-all">
            <input
              type="file"
              id="fileUpload"
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf,.jpg,.jpeg,.png"
            />
            <label htmlFor="fileUpload" className="cursor-pointer">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-neon-blue/20 flex items-center justify-center">
                <Upload className="w-10 h-10 text-neon-blue" />
              </div>
              <p className="text-xl font-semibold mb-2">Click to upload or drag and drop</p>
              <p className="text-gray-400">Supported formats: PDF, JPG, PNG (Max 10MB)</p>
            </label>
          </div>

          {/* Selected File */}
          {selectedFile && (
            <div className="glass-card p-6 mb-8">
              <div className="flex items-center gap-4">
                <FileText className="w-10 h-10 text-neon-blue flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-semibold">{selectedFile.name}</p>
                  <p className="text-sm text-gray-400">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <button
                  onClick={() => setSelectedFile(null)}
                  className="text-red-500 hover:text-red-400"
                >
                  Remove
                </button>
              </div>
            </div>
          )}

          {/* Security Features */}
          <div className="glass-card p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-neon-blue" />
              Security Features
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <Lock className="w-4 h-4 text-neon-green mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">AES-256 Encryption</p>
                  <p>Document encrypted before storage with military-grade security</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lock className="w-4 h-4 text-neon-green mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">SHA-256 Blockchain Hash</p>
                  <p>Unique hash generated and recorded on immutable blockchain</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lock className="w-4 h-4 text-neon-green mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Zero-Knowledge Proof Ready</p>
                  <p>Document prepared for privacy-preserving verification</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lock className="w-4 h-4 text-neon-green mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">You Control Access</p>
                  <p>Only you can approve who verifies your documents</p>
                </div>
              </div>
            </div>
          </div>

          {/* Upload Button */}
          <button
            onClick={handleUpload}
            disabled={!selectedFile || isUploading}
            className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isUploading ? 'Encrypting & Uploading...' : 'Upload Document'}
          </button>

          <p className="text-center text-sm text-gray-400 mt-6">
            Your document will be encrypted and stored securely. No one can access it without your permission.
          </p>
        </div>
      </div>
    </div>
  )
}